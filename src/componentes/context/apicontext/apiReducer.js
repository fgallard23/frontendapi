// import type
import {
    GET_ALL_FILES,
    GET_CONTENT_FILE,
    SET_LOADING
} from '../type'

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_FILES:
            return {
                ...state,
                files: action.payload,
                loading: false
            };
        case GET_CONTENT_FILE:
            return {
                ...state,
                contentFile: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}