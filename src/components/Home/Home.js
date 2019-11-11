import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    // Renders all movies as a card type div to the dom
    
    componentDidMount = () => { // On load get all movies and data from db
        this.props.dispatch({ type: "GET_MOVIES" });
    }


    routeToDetails = (movie) => { // on poster click route to details page and get selected movie details into redux
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: movie.id });
        this.props.history.push(`/details/${movie.id}`);
    }

    render() {
        return (
            <>
                <div >
                    {this.props.movies.map((movie, i) => // map through movie array
                        <div className="cardArea">
                            <h1 className="h1DetailsTitle">{movie.title}</h1>
                            <h2 className="genresLabel">Genre(s) </h2>
                            <ul className="genresUl"> 
                                {/* map through genre array */}
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
