import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import { entities } from '../';
import loader from '../loader/reducer';
import auth from '../auth/reducer';
import boats from '../boats/reducer';

const appReducer = combineReducers({
  loader,
  auth,
  boats,
  entities: createReducer(entities)
});

export default appReducer;