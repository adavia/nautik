import { Model, attr } from 'redux-orm';

import { FETCH_ATTACHMENTS_SUCCESS, CREATE_ATTACHMENT_SUCCESS } from './actions';

export class Attachment extends Model {
  static reducer(action, Attachment) {
    const { payload, type } = action;

    switch (type) {
      case FETCH_ATTACHMENTS_SUCCESS:
        payload.forEach(attach => {
          Attachment.upsert(attach);
        })
        break;
      case CREATE_ATTACHMENT_SUCCESS:
        payload.forEach(attach => {
          Attachment.create(attach);
        })
        break;
      default:
    }
  }
}

Attachment.modelName = 'Attachment';
Attachment.options = { idAttribute: '_id' };
Attachment.fields = {
  name: attr(),
  entityType: attr()
}
