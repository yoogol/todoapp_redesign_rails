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

  handleLogin() {
    console.log("login submitted");
    var afterLoginHandler = function(success) {
      if (!success) {
        return this.setState({error: true});
      } else {
        this.setState({successMsg: 'Successfully logged in'});
      }
    }.bind(this);


    auth.login(this.state.email, this.state.password, afterLoginHandler)
  }

  render() {
    return (
      <div style={loginStyle}>
        <form>
          <label>Email: </label>
          <input
            type='text'
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})}
            />
          <br></br>
          <label>Password: </label>
          <input
            type='text'
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
            />
          <button onClick={() => this.handleLogin() }>Submit</button>
        </form>
      </div>

    )
  }
}

let loginStyle = {
  position: 'fixed',
  top: 100,
}

export default Login;
