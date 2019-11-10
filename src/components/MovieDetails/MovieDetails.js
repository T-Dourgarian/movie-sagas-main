import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class MovieDetails extends Component {

    componentDidMount = () => {
       this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: this.props.match.params.id });
    }

    routeToHome = () => {
        this.props.history.push('/');
    }


    toEditMode = () => {
        this.props.history.push(`/details/edit/${this.props.match.params.id}`)
    }

  render() {
    return (
      <>

      <button onClick={this.routeToHome} >Home</button>
      <button onClick={this.toEditMode}>Edit</button>
      <h1>Movie details</h1>
      <h2>{this.props.movieDetails.title}</h2>
      <img src={this.props.movieDetails.poster} alt="movie poster" />
      <p>{this.props.movieDetails.description}</p>
      <h3>Genres: </h3>
      <ul>
          {this.props.movieDetails.genre_array && this.props.movieDetails.genre_array.map((genre,i) => <li key={i} >{genre}</li>)}
      </ul>
      {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
      </>
    );
  }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(MovieDetails);
