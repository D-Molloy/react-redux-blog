import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPost from '../actions';

class PostsShow extends Component {
    
    componentDidMount(){
        //grabbing the id included in the route that is passed to us by react-router
        //match is top level property
        //params - obj that contains all the wildcard tokens that exist inside the url
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    // posts[this.props.match.params.id]//the post we want to show, but we don't want to pull in all the posts (wasteful)
    render () {
        return (
            <div>
                SHOWING A POST
            </div>
        )
    }
}


//posts is currently the full object of posts from the state
//first arg == application state
//second arg == conventionally name ownProps - this.props(in the render method) === ownProps
//common to modularize mapStateToProps
function mapStateToProps({ posts }, ownProps){
    //the post will only receive the specific post we care about
    return { post: posts[ownProps.match.params.id] };
}

// CONNECT() TAKES TWO PARAMETERS
//first - a function that describes what part of the redux store we want to use on this component
//second - what actionCreators we want to use in the component to send data to the redux store
export default connect(mapStateToProps, { fetchPost })(PostsShow);