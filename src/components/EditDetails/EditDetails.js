import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route ,Switch} from 'react-router-dom';

class EditDetails extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: this.props.match.params.id });
    }

    handleChangeFor = (property, event) => {
        this.props.dispatch({ type: "EDIT_MOVIE_DETAILS", payload: { property: property, value: event.target.value } });
    }

    routeToDetails = () => {
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }


    saveEdits = () => {
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
                {/* <div className="formDiv">
                    <form onSubmit={this.saveEdits}>
                        <h3>Title: </h3><input className="titleInput" onChange={(event) => this.handleChangeFor('title', event)} value={this.props.movieDetails.title} /> <br />
                        <h3>Description: </h3> <textarea className="descriptionInput" className="desciptionInput" onChange={(event) => this.handleChangeFor('description', event)} value={this.props.movieDetails.description} />
                    </form>
                </div> */}

                <div className="cardArea">
                    <input className="inputNewTitle" onChange={(event) => this.handleChangeFor('title', event)} value={this.props.movieDetails.title}></input>
                    <h2 className="genresLabel">Genre: </h2>
                    <ul className="genresUl">
                        {this.props.movieDetails.genre_array && this.props.movieDetails.genre_array.map((genre, i) => <li key={i} >{genre}</li>)}
                    </ul>
                    <br/>
                    <img src={this.props.movieDetails.poster} />
                    <span className="posterDescription">
                        <div >
                            <h3>Description </h3>
                            <textarea className="descriptionEditInput" value={this.props.movieDetails.description}></textarea>
                        </div>
                    </span>
                </div>
            </>
        );
    }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(EditDetails);
