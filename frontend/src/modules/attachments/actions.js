import attachmentAPI from './api';

export const FETCH_ATTACHMENTS_REQUEST = 'FETCH_ATTACHMENTS_REQUEST';               
export const FETCH_ATTACHMENTS_SUCCESS = 'FETCH_ATTACHMENTS_SUCCESS';               
export const FETCH_ATTACHMENTS_FAILURE = 'FETCH_ATTACHMENTS_FAILURE';

export const CREATE_ATTACHMENT_REQUEST = 'CREATE_ATTACHMENT_REQUEST';               
export const CREATE_ATTACHMENT_SUCCESS = 'CREATE_ATTACHMENT_SUCCESS';               
export const CREATE_ATTACHMENT_FAILURE = 'CREATE_ATTACHMENT_FAILURE';

export function createAttachment(id, values) {
  return async (dispatch) => {
    dispatch(attachmentResponse(CREATE_ATTACHMENT_REQUEST));  
    try {
      const response = await attachmentAPI.create(`/attachments?id=${id}&entity=boat`, values);
      dispatch(attachmentResponse(CREATE_ATTACHMENT_SUCCESS, response.data));
    } catch ({ response }) {
      dispatch(attachmentResponse(CREATE_ATTACHMENT_FAILURE, response.data.error));
      return response;
    }
  }
}

function attachmentResponse(type, payload = {}, meta = {}) {
  return {
    type,
    payload,
    meta
  }
}