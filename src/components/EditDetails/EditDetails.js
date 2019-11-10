import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route ,Switch} from 'react-router-dom';

class EditDetails extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_MOVIE_DETAILS", payload: this.props.match.params.id });
    }

    handleChangeFor = (property,event) => {
        this.props.dispatch({ type: "EDIT_MOVIE_DETAILS", payload:{property:property,value:event.target.value} });
    }

    routeToDetails = () => {
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }


    saveEdits = () => {
        this.props.dispatch({type:"SET_MOVIE_DETAIL_EDITS",payload:this.props.movieDetails})
        this.props.history.push(`/details/${this.props.match.params.id}`)
    }

    render() {
        return (
            <>  
                <button onClick={this.routeToDetails} >Cancel</button>
                <button onClick={this.saveEdits}>Save</button>
                <br />
                Title:<input name="title" onChange={(event) => this.handleChangeFor('title',event)} value={this.props.movieDetails.title} /> <br/>
                Description: <textarea onChange={(event) => this.handleChangeFor('description',event)} value={this.props.movieDetails.description} />
                <pre>{JSON.stringify(this.props.movieDetails,null,2)}</pre>
            </>
        );
    }
}

const mapRedux = redux => redux;

export default connect(mapRedux)(EditDetails);
