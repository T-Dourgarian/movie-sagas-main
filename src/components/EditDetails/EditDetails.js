import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route ,Switch} from 'react-router-dom';

class EditDetails extends Component {

    componentDidMount = () => { // get movie details on load
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: this.props.match.params.id });
    }

    handleChangeFor = (property, event) => { // directly edit redux state object instead of local state
        this.props.dispatch({ type: "EDIT_MOVIE_DETAILS", payload: { property: property, value: event.target.value } });
    }

    routeToDetails = () => { // route back to details page
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }


    saveEdits = () => { // route back to details page after setting the new data 
        this.props.dispatch({ type: "SET_MOVIE_DETAIL_EDITS", payload: this.props.movieDetails })
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }

    render() {
        return (
            <>
                <header className="detailPageHeader">
                    <h1>Edit Movie Details</h1> <br />
                    <button onClick={this.routeToDetails} className="editDetailsBtn cancelBtn"><i class="fas fa-ban"></i> Cancel</button>
                    <button onClick={this.saveEdits} className="editDetailsBtn saveBtn"><i class="far fa-save"></i> Save</button>
                </header>

                <div className="cardArea">
                    <form onSubmit={this.saveEdits}>
                        {/* set value of input as a redux state property inorder to directly change redux*/}
                        <input 
                            className="inputNewTitle" 
                            onChange={(event) => this.handleChangeFor('title', event)} 
                            value={this.props.movieDetails.title}>
                        </input>
                        <h2 className="genresLabel">Genre(s) </h2>
                        {/* loop through genres */}
                        <ul className="genresUl">
                            {this.props.movieDetails.genre_array && this.props.movieDetails.genre_array.map((genre, i) => <li key={i} >{genre}</li>)}
                        </ul>
                        <br />
                        <img src={this.props.movieDetails.poster} />
                        <span className="posterDescription">
                            <div >
                                <h3>Description </h3>
                                {/* set value of input as a redux state property inorder to directly change redux*/}
                                <textarea 
                                    className="descriptionEditInput"
                                    onChange={(event) => this.handleChangeFor('description', event)}
                                    value={this.props.movieDetails.description}>
                                </textarea>
                            </div>
                        </span>
                    </form>
                </div>
            </>
        );
    }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(EditDetails);
