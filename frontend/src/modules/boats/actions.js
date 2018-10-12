import boatAPI from './api';

import { fetchCategories } from '../categories/actions';

export const FETCH_BOATS_REQUEST = 'FETCH_BOATS_REQUEST';               
export const FETCH_BOATS_SUCCESS = 'FETCH_BOATS_SUCCESS';               
export const FETCH_BOATS_FAILURE = 'FETCH_BOATS_FAILURE';

export const SELECT_BOAT_REQUEST = 'SELECT_BOAT_REQUEST';               
export const SELECT_BOAT_SUCCESS = 'SELECT_BOAT_SUCCESS';               
export const SELECT_BOAT_FAILURE = 'SELECT_BOAT_FAILURE';

export const CREATE_BOAT_REQUEST = 'CREATE_BOAT_REQUEST';               
export const CREATE_BOAT_SUCCESS = 'CREATE_BOAT_SUCCESS';               
export const CREATE_BOAT_FAILURE = 'CREATE_BOAT_FAILURE';

export const UPDATE_BOAT_REQUEST = 'UPDATE_BOAT_REQUEST';               
export const UPDATE_BOAT_SUCCESS = 'UPDATE_BOAT_SUCCESS';               
export const UPDATE_BOAT_FAILURE = 'UPDATE_BOAT_FAILURE';

export function fetchBoats() {                                  
  return async (dispatch) => {
    dispatch(boatResponse(FETCH_BOATS_REQUEST));    
    try {
      const response = await boatAPI.fetch('/boats');
      dispatch(boatResponse(FETCH_BOATS_SUCCESS, response.data));
    } catch ({ response }) {
      dispatch(boatResponse(FETCH_BOATS_FAILURE, response.data.error));
    }
  }
}

export function selectBoat(id) {
  return async (dispatch) => {
    dispatch(boatResponse(SELECT_BOAT_REQUEST));    
    try {
      const response = await boatAPI.show(`/boats/${id}`);
      dispatch(boatResponse(SELECT_BOAT_SUCCESS, response.data));
    } catch ({ response }) {
      dispatch(boatResponse(SELECT_BOAT_FAILURE, response.data.error));
    }
  }
}

export function fetchBoatAndCategories(id) {
  return dispatch => Promise.all([
    dispatch(selectBoat(id)),
    dispatch(fetchCategories())
  ]);
}

export function createBoat(values) {
  return async (dispatch) => {
    dispatch(boatResponse(CREATE_BOAT_REQUEST));  
    try {
      const response = await boatAPI.create('/boats', values);
      dispatch(boatResponse(CREATE_BOAT_SUCCESS, response.data));
      return response;
    } catch ({ response }) {
      dispatch(boatResponse(CREATE_BOAT_FAILURE, response.data.error));
      return response;
    }
  }
}

export function updateBoat(id, values) {
  return async (dispatch) => {
    dispatch(boatResponse(UPDATE_BOAT_REQUEST));    
    try {
      const response = await boatAPI.update(`/boats/${id}`, values);
      dispatch(boatResponse(UPDATE_BOAT_SUCCESS, response.data));
    } catch ({ response }) {
      dispatch(boatResponse(UPDATE_BOAT_FAILURE, response.data.error));
    }
  }
}

function boatResponse(type, payload = {}, meta = {}) {
  return {
    type,
    payload,
    meta
  }
}