import client from '../../config/client';

class User {
  fetch(url) {
    return client.get(url);   
  }

  create(url, values) {
    return client.post(url, values);   
  }
}

const userAPI = new User();
export default userAPI;