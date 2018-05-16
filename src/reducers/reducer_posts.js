import { FETCH_POSTS, CREATE_POST } from '../actions';
import _ from 'lodash'


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        // case CREATE_POST:
        //     return
        default:
            return state;
    }
}