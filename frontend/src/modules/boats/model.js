import { Model, attr, many } from 'redux-orm';

import { FETCH_BOATS_SUCCESS, CREATE_BOAT_SUCCESS, UPDATE_BOAT_SUCCESS } from './actions';

export class Boat extends Model {
  static reducer(action, Boat, session) {
    const { payload, type } = action;

    switch (type) {
      case FETCH_BOATS_SUCCESS:
        payload.forEach(boat => {
          boat.categories.forEach(category => session.Category.upsert(category));
          const categoryIds = boat.categories.map(category => category._id);
          Boat.upsert({ ...boat, categories: categoryIds });
        })
        break;
      case CREATE_BOAT_SUCCESS:
        Boat.create(payload);
        break;
      case UPDATE_BOAT_SUCCESS:
        Boat.upsert(payload);
        break;
      default:
    }
  }
}

Boat.modelName = 'Boat';
Boat.options = { idAttribute: '_id' };
Boat.fields = {
  name: attr(),
  description: attr(),
  pricing: attr(),
  categories: many('Category', 'categories')
}
