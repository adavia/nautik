import { AUTH_SUCCESS } from './actions';

const initialState = {
  currentUser: {},
  authenticated: false
}

export default function reducer(state = initialState, action) {   
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        authenticated: true
      };
    default:
      return state;
  }
}