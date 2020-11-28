//Actions Page
//import axios here
import axios from 'axios';

//Now make actions

export const FETCH_FOXES = 'FETCH_FOXES'; //api call
export const UPDATE_FOXES = 'UPDATE_FOXES'; //display
export const SET_ERROR = 'SET_ERROR'; //errors

export const getFoxes = () => dispatch => {
    dispatch({type: FETCH_FOXES});
    axios
    .get('https://randomfox.ca/floof/')
    .then(res => {
        dispatch({type: UPDATE_FOXES, payload: res.data })
    })
    .catch(error => {
        console.log('Error in Actions', error.message),
        dispatch({type: SET_ERROR, payload: 'There was an error fetching the foxes data.'})
    })
};

//Now reducers