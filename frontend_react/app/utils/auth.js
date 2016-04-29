import axios from 'axios';
import AjaxHelpers from './AjaxHelpers';

module.exports = {
  login(email, password, afterLoginHandler) {
    console.log(email, password)
    if (this.loggedIn()) {
      if (afterLoginHandler) {
        afterLoginHandler(true);
      }
      return;
    }

    axios.post(AjaxHelpers.baseUrl + '/auth/sign_in', {
      email: email,
      password: password
    })
    .then(function(response) {
      console.log(response);

      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.clientl

      if (afterLoginHandler) {
        afterLoginHandler(true)
      }
    })
    .catch(function(response) {
      console.log("There was an error", response);
      if (afterLogoutHandler) {
        afterLoginHandler(false);
      }
    });
  },

  signup(email, password, password_confirmation, afterSignupHandler) {
    console.log(email, password)
    if (this.loggedIn()) {
      if (afterSignupHandler) {
        afterSignupHandler(true)
      }
      return;
    }

    axios.post(AjaxHelpers.baseUrl + '/auth/', {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    })
    .then(function (response) {
      console.log(response);

      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterSignupHandler) {
        afterSignupHandler(true)
      }
    })
  .catch (function(response) {
    console.log("There was an error:", response.data.errors);
    if (afterSignupHandler) {
      afterSignupHandler(false);
    }
  })
  },

  logout(afterLogoutHandler) {
    console.log("logging out")

    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    axios.delete(ajaxHelpers.baseUrl + '/auth/sign_out', {
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    })
    .then(function (response) {
      console.log(response);

      delete localStorage.uid
      delete localStorage.accessToken
      delete localStorage.client

      if (afterLogoutHandler) {
        afterLogoutHandler(true)
      }
    })
    .catch(function (response) {
      console.log("there was an error", response);
      if (afterLogoutHandler) {
        afterLogoutHandler(false);
      }
    })
  },

  loggedIn() {
    return (!!localStorage.uid && !!localStorage.accessToken && !!localStorage.client);
  }
}
