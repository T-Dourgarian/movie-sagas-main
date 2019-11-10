import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditDetails from '../EditDetails/EditDetails';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>

        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/details/:id" component={MovieDetails} />
          <Route exact path="/details/edit/:id" component={EditDetails} />
        </Switch>
      </Router>
    );
  }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(App);
