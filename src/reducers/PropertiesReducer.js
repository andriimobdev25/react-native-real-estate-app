import {
    PROPERTIES_FETCH_SUCCESS, PROPERTIES_FILTERED
} from '../actions/types';

const INITIAL_STATE = {
    list: [],
    listFiltered: [],
    loading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PROPERTIES_FILTERED:
            // Will send to app state in combineReducers as state.listFiltered
            return { ...state, listFiltered: action.payload, loading: false }
        case PROPERTIES_FETCH_SUCCESS:
            // Will send to app state in combineReducers as state.properties
            return { ...state, list: action.payload, listFiltered: action.payload, loading: false }
        default:
            return state;
    }
};