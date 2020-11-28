//import your actions

import { FETCH_FOXES, UPDATE_FOXES, SET_ERROR } from '../actions';

//make initial state

const initialState = {
    fexes: {},
    isFetchingData: false,
    error: ''
};

//make reducer

export const foxReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_FOXES:
            return{
                ...state,
                isFetchingData: true,
            };
            case UPDATE_FOXES:
                return {
                    ...state,
                    foxes: action.payload,
                    isFetchingData: false
                };
                case SET_ERROR:
                    return {
                        ...state,
                        isFetchingData: false,
                        error: action.payload
                    };
                    default:
                        return state;
    }
};

//Work on Form now