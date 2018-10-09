import { Model, attr } from 'redux-orm';

import { CREATE_USER_SUCCESS } from './actions';

export class User extends Model {
  static reducer(action, User) {
    const { payload, type } = action;

    switch (type) {
      case CREATE_USER_SUCCESS:
        User.create(payload);
        break;
      default:
    }
  }
}

User.modelName = 'User';
User.options = { idAttribute: '_id' };
User.fields = {
  username: attr(),
  email: attr(),
  password: attr()
}
