import categoryAPI from './api';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';               
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';               
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export function fetchCategories() {                                  
  return async (dispatch) => {
    dispatch(categoryResponse(FETCH_CATEGORIES_REQUEST));    
    try {
      const response = await categoryAPI.fetch('/categories');
      dispatch(categoryResponse(FETCH_CATEGORIES_SUCCESS, response.data));
    } catch ({ response }) {
      dispatch(categoryResponse(FETCH_CATEGORIES_FAILURE, response.data.error));
    }
  }
}

function categoryResponse(type, payload = {}, meta = {}) {
  return {
    type,
    payload,
    meta
  }
}