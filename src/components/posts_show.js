import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPost from '../actions';

class PostsShow extends Component {
    
    componentDidMount(){
        //grabbing the id included in the route that is passed to us by react-router
        //match is top level property
        //params - obj that contains all the wildcard tokens that exist inside the url
        const { id } = this.props.match.params;
        //fetchPost grabs the data, adds it to the state, and we get it back in props with mapStateToProps
        this.props.fetchPost(id);
    }

    // posts[this.props.match.params.id]//the post we want to show, but we don't want to pull in all the posts (wasteful)
    render () {
        const { post } = this.props;
        // when POST_SHOW first renders it doesn't have a post from redux yet, in that case, we'll display a message
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}


//posts is currently the full object of posts from the state
//first arg == application state
//second arg == conventionally name ownProps - this.props(in the render method) === ownProps
//ownProps === all the props headed to PostShow
//common to modularize mapStateToProps
function mapStateToProps({ posts }, ownProps) {
    //the post will only receive the specific post we care about
    return { post: posts[ownProps.match.params.id] };
}


// CONNECT() TAKES TWO PARAMETERS
//first - a function that describes what part of the redux store we want to use on this component
//second - what actionCreators we want to use in the component to send data to the redux store
export default connect(mapStateToProps, { fetchPost })(PostsShow);