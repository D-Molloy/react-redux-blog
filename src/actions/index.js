import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post'
const ROOT_URL = "http://reduxblog.herokuapp.com/api/"
const API_KEY = "?key=98126hat"

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

//axios returns a promise, so we can add a .then and call our callback (the redirect in posts_new onSubmit)
export function createPost(values, cb) {

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => cb());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(id, cb){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => cb());
    return{
        type: DELETE_POST,
        // just sending the id of the deleted post to the reducer
        payload: id
    }
}

export default function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}