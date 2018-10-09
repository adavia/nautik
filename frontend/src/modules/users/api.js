import client from '../../config/client';

class User {
  fetch() {
    return client.get('/users');   
  }

  create(values) {
    return client.post('/users', values);   
  }
}

const userAPI = new User();
export default userAPI;