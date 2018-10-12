import client from '../../config/client';

class Auth {
  authenticate(url) {
    return client.get(url);   
  }

  login(url, values) {
    return client.post(url, values);   
  }

  logout(url) {
    return client.delete(url);   
  }
}

const authAPI = new Auth();
export default authAPI;