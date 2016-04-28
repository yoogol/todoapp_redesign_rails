import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import App from './containers/App';
import Todos from './containers/Todos';
import Login from './components/Login';
import AddEditForm from './components/AddEditForm';
import About from './components/About';
import Signup from './components/Signup';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/alltodos" component={Todos} />
      <Route path="/add" component={AddEditForm} />
      <Route path="/edit" component={AddEditForm} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('app')
);
