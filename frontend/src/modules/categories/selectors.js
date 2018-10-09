import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';
import { entities } from '../';

export const entitiesSelector = state => state.entities;

export const getAllCategories = createSelector(
  entitiesSelector,
  ormCreateSelector(entities, session => {
    return session.Category.all().toRefArray();
  })
);