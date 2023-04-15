import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from '../slice/greetingSlice';

const initialState = {
  greeting: 'Bonjour!',
  loading: false,
  error: '',
};

export const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return { ...state, loading: true };
    case FETCH_GREETING_SUCCESS:
      return { loading: false, greeting: action.payload, error: '' };
    case FETCH_GREETING_FAILURE:
      return { loading: false, greeting: '', error: action.payload };
    default:
      return state;
  }
};
export default greetingReducer;
