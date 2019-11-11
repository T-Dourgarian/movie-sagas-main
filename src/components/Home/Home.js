import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    // Renders the entire app on the DOM
    componentDidMount = () => {
        this.props.dispatch({ type: "GET_MOVIES" });
    }


    routeToDetails = (movie) => {
        console.log(movie);
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: movie.id });
        this.props.history.push(`/details/${movie.id}`);
    }

    render() {
        return (
            <>
                <div >
                    {this.props.movies.map((movie, i) =>
                        <div className="cardArea">
                            <h1 className="h1DetailsTitle">{movie.title}</h1>
                            <h2 className="genresLabel">Genre(s) </h2>
                            <ul className="genresUl">
                                {movie.genre_array.map((genre, i) => <li key={i} >{genre}</li>)}
                            </ul>
                            <img className="poster" alt="" onClick={() => this.routeToDetails(movie)} src={movie.poster} />
                            <span className="posterDescription">
                                <div className="descriptionDiv">
                                    <h3>Description </h3>
                                    {movie.description}
                                </div>
                            </span>
                        </div>)}
                </div>
            </>
        );
    }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(Home);
