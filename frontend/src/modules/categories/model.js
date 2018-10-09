import { Model, attr } from 'redux-orm';

import { CREATE_BOAT_SUCCESS } from '../boats/actions';
import { FETCH_CATEGORIES_SUCCESS } from './actions';

export class Category extends Model {
  static reducer(action, Category) {
    const { payload, type } = action;

    switch (type) {
      case FETCH_CATEGORIES_SUCCESS:
        payload.forEach(category => {
          Category.upsert(category);
        })
        break;
      case CREATE_BOAT_SUCCESS:
        payload.categories.forEach(category => {
          Category.upsert(category);
        })
        break;
      default:
    }
  }
}

Category.modelName = 'Category';
Category.options = { idAttribute: '_id' };
Category.fields = {
  name: attr()
}
