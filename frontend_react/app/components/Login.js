import React, {
  Component
} from 'react';
import auth from '../utils/auth';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      successMsg: ''
    };
  }

  handleLogin(e) {
    e.preventDefault()
    var afterLoginHandler = function(success) {
      if (!success) {
        return this.setState({error: true});
      } else {
        this.setState({successMsg: 'Successfully logged in'});

        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
          this.props.history.push(location.state.nextPathname);
        } else {
          this.props.history.push('/');
        }
      }
    }.bind(this);

    auth.login(this.state.email, this.state.password, afterLoginHandler)
  }

  handleLogout() {
    var afterLogoutHandler = function(success) {
      if (success) {
        this.setState({successMsg: "You have successfully logged out"});
      }
    }.bind(this);
    autho.logout(afterLogoutHandler);
  }

  render() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>You are logged in</p>
          <button onClick={ () => this.handleLogout() }>Logout</button>
          <p>{this.state.successMsg}</p>
        </div>
      )
    }

    return (
      <div>
        <input placeholder='email' type='email' name='email' onChange={ e => this.setState({email: e.target.value}) } />
        <input placeholder='password' type='password' name='password' onChange={ e => this.setState({password: e.target.value}) } />
        <button onClick={ () => this.handleLogin() }>Submit</button>
        <p>{"Don't have an account?"}<Link to={'/signup'}>Sign Up</Link></p>
        <p>{this.state.successMsg}</p>
      </div>
    );
  }
}

let loginStyle = {
  position: 'fixed',
  top: 100,
}

export default Login;
