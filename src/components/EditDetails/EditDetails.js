import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route ,Switch} from 'react-router-dom';

class EditDetails extends Component {
  // Renders the entire app on the DOM

    state ={
        newTitle:this.props.movieDetails.title,
        newDescription:this.props.movieDetails.description
    }
    saveEdits = () => {
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }

  render() {
    return (
      <>
      <button onClick={this.saveEdits}>Save</button>
        <br/>
      <input value={this.state.newTitle}/>
      <textarea value={this.state.newDescription}/>
      </>
    );
  }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(EditDetails);
