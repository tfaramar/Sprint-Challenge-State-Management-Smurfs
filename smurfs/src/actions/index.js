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
                console.log(error, error.response);
                dispatch({ type: FETCH_DATA_FAILURE, payload: error.response })
            })
    }
};

// export const POST_DATA_START = 'POST_DATA_START';
// export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
// export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

// export const postData = (values) => {
//     return dispatch => {
//         dispatch({ type: POST_DATA_START });
//         axios.post('http://localhost:3333/smurfs', values)
//             .then(res => {
//                 console.log(res.data);
//                 dispatch({ type: POST_DATA_SUCCESS })
//             })
//             .catch(error => {
//                 console.log(error.response);
//                 dispatch({ type: POST_DATA_FAILURE })
//             })
//     }
// };