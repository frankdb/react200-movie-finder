import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path='/' component={MovieSearchContainer} />
          <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
      </Router>
    );
  }
}

export default App;