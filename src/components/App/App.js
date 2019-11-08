import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        
            <Route path="/" component={Home}/>
      </Router>
    );
  }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(App);
