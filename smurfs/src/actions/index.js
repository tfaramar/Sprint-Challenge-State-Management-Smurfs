import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_DATA_FAILURE, payload: error.response })
            })
    }
};