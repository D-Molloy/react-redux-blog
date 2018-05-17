import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component {
    
    componentDidMount(){
        //currently fetching an individual post twice (which is okay) 1 - on post_index and 2-with fetchApp
        //can check the data and only fetch if the post doesn't exist
        if(!this.props.post){
            //grabbing the id included in the route that is passed to us by react-router
            //match is top level property
            //params - obj that contains all the wildcard tokens that exist inside the url
            const { id } = this.props.match.params;
            //fetchPost grabs the data, adds it to the state, and we get it back in props with mapStateToProps
            this.props.fetchPost(id);
        }
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push("/")
        })
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
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
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
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);