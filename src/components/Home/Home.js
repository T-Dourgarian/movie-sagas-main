import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  // Renders the entire app on the DOM
    componentDidMount = () => {
        this.props.dispatch({type:"GET_MOVIES"});
    }

  render() {
    return (
        <div className="App">
        <pre>{JSON.stringify(this.props.movies,null,2)}</pre>
      </div>
    );
  }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(Home);
