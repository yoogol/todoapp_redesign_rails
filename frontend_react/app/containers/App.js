import React, {
  Component
} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import Filter from '../components/Filter';
import ActionMenu from '../components/ActionMenu'

class App extends Component {
  render() {
    return (
      <div>

      {this.props.children}
      </div>
    )
  }
}


export default App;
