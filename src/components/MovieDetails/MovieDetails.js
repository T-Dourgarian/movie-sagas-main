import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class MovieDetails extends Component {

    // get move details incase user routes to a details page manually instead of by button click
    componentDidMount = () => {
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: this.props.match.params.id });
    }

    routeToHome = () => { // route to home page
        this.props.history.push('/');
    }


    toEditMode = () => { // route to edit mode with id in url
        this.props.history.push(`/details/edit/${this.props.match.params.id}`)
    }

    render() {
        return (
            <>
                <header className="detailPageHeader">
                    <h1>Movie Details</h1> <br />
                    {/* router buttons */}
                    <button className="detialPageHeaderButtons" onClick={this.routeToHome} ><i class="fas fa-home"></i> Home</button>
                    <button className="detialPageHeaderButtons" onClick={this.toEditMode}><i class="fas fa-edit"></i> Edit</button>
                </header>
                {/* same display type as home page only with one movie */}
                <div className="cardArea">
                    <h1 className="h1DetailsTitle">{this.props.movieDetails.title}</h1>
                    <h2 className="genresLabel">Genre(s) </h2>
                    <ul className="genresUl">
                        {/* conditional rendering because movie details arent always ready on pageload */}
                        {this.props.movieDetails.genre_array && this.props.movieDetails.genre_array.map((genre, i) => <li key={i} >{genre}</li>)}
                    </ul>
                    <img src={this.props.movieDetails.poster} />
                    <span className="posterDescription">
                        <div >
                            <h3>Description </h3>
                            {this.props.movieDetails.description}
                        </div>
                    </span>
                </div>
                {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
            </>
        );
    }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(MovieDetails);
