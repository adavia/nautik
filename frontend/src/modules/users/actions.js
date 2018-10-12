import userAPI from './api';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';               
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';               
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export function createUser(values) {
  return async (dispatch) => {
    dispatch(userResponse(CREATE_USER_REQUEST));  
    try {
      const response = await userAPI.create('/users', values);
      dispatch(userResponse(CREATE_USER_SUCCESS, response.data));
      return response;
    } catch ({ response }) {
      dispatch(userResponse(CREATE_USER_FAILURE, response.data.error));
      return response;
    }
  }
}

function userResponse(type, payload = {}, meta = {}) {
  return {
    type,
    payload,
    meta
  }
}