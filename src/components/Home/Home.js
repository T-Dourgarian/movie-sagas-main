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
                <ul>
                    {this.props.movies.map((movie, i) =>
                        <li key={i} >
                            <h1>{movie.title}</h1>
                            <img className="poster" alt="" onClick={() => this.routeToDetails(movie)} src={movie.poster} />
                            <span className="posterDescription">
                                <h3>Description: </h3>
                                {movie.description}
                            </span>
                        </li>)}
                </ul>
                <pre>{JSON.stringify(this.props.movies, null, 2)}</pre>
            </>
        );
    }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(Home);
