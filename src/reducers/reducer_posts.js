import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash'


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            //ES5 method
            // // action.payload.data == response data
            // const post = action.payload.data;
            // // use the existing state and spread it into the new object
            // const newState =  {...state };
            // // take the newState object, add on the additional post.id property, and set it equal to post
            // newState[post.id] = post;
            // return newState;
            // ES6 method below identical to ES5 version 
            // [action.payload.data.id]: action.payload.data === key interpolation
            // we are making a new key on the returned object of whatever action.payload.data.id is, and assigning it the value of the payload
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}