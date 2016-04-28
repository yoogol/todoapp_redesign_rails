import axios from 'axios';
import AjaxHelpers from './AjaxHelpers';

module.exports = {
  login(email, password, afterLoginHandler) {
    console.log(email, password)
  },

  signup(email, password, password_confirmation, afterSignupHandler) {
    console.log(email, password)
  },

  logout(afterLogoutHandler) {
    console.log("logging out")
  },

  loggedIn() {
    return (!!localStorage.uid && !!localStorage.accessToken && !!localStorage.client);
  }
}
