import React, {
  Component
} from 'react';
import auth from '../utils/auth';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      error: false,
      successMsg: ''
    };
  }

  handleSignup() {
    var afterSignupHandler = function(success) {
      if (!success) {
        console.log('There was an error');
        return this.setState({error: true});
      } else {
        this.props.hisotry.push('/');
      }
    }.bind(this);

    auth.signup(this.state.email, this.state.password, this.state.passwordConfirmation, afterSignupHandler);
  }

  render() {
    const isLoggedIn = auth.loggedIn();

    if (isLoggedIn) {
      return (
        <div>
          <p>You are logged in</p>
        </div>
      )
    }

    return (
    <div>
      <input
        placeholder='email'
        type='email'
        name='email'
        onChange={ e => this.setState({email: e.target.value})} />
      <input
        palceholder='password'
        type='password'
        name='password'
        onChange={ e => this.setState({password: e.target.value})} />
      <input
        placeholder='password confirmation'
        type='password'
        name='passwordConf'
        onChange={ e => this.setState({passwordConfirmation: e.target.value}) } />
      <button onClick={ () => this.handleSignup() }>Submit</button>
      <p>Already have an account?<Link to={'/'}>Sign In</Link></p>
      <p>{this.state.successMsg}</p>
    </div>
    )
  }
}

export default Signup;
