import axios from 'axios';

export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

export const fetchGreeting = () => (dispatch) => {
  dispatch({ type: FETCH_GREETING_REQUEST });
  axios
    .get('http://localhost:3000/random_greeting')
    .then((response) => {
      const { greeting } = response.data;
      dispatch({ type: FETCH_GREETING_SUCCESS, payload: greeting });
    })
    .catch((error) => {
      const errorMessage = error.message;
      dispatch({ type: FETCH_GREETING_FAILURE, payload: errorMessage });
    });
};
