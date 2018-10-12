import client from '../../config/client';

class Attachment {
  constructor() {
    this.headers = { headers: { 'Content-Type': 'multipart/form-data' } };
  }

  fetch(url) {
    return client.get(url);   
  }

  create(url, values) {
    return client.post(url, values, this.headers);   
  }
}

const attachmentAPI = new Attachment();
export default attachmentAPI;