import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
const ROOT_URL = "http://reduxblog.herokuapp.com/api/"
const API_KEY = "?key=98126hat"

export function fetchPosts(){
    
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

//axios returns a promise, so we can add a .then and call our callback (the redirect in posts_new onSubmit)
export function createPost(values, callback) {

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(()=> callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}