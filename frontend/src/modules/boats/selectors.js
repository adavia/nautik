import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';
import { entities } from '../';

export const entitiesSelector = state => state.entities;

export const getAllBoats = createSelector(
  entitiesSelector,
  ormCreateSelector(entities, session => {
    return session.Boat.all().toModelArray().map(boat => {
      // `boat.ref` is a direct reference to the state,
      // so we need to be careful not to mutate it.
      //
      // We want to add a denormalized `categories` attribute
      // to each of our boats, so we make a shallow copy of `boat.ref`.
      const obj = Object.assign({}, boat.ref);
      obj.categories = boat.categories.toRefArray().map(category => category);
      return obj;
    });
  })
);

export const getSelectedBoat = state => state.boats.selectedBoat;
