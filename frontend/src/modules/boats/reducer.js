import { SELECT_BOAT_SUCCESS } from './actions';

const initialState = {
  selectedBoat: null
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_BOAT_SUCCESS:
      return {
        ...state,
        selectedBoat: payload
      };
    default:
      return state;
  }
}