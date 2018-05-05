import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
                PostsIndex
            </div>
        );
    }
}


//connecting the action creator to the component
//similar to mapDispatchToProps, but we can pass the action 
// {fetchPosts:FetchPosts}
export default connect(null, {fetchPosts})(PostsIndex);