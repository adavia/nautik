import client from '../../config/client';

class Boat {
  fetch(url) {
    return client.get(url);   
  }

  show(url) {
    return client.get(url);   
  }

  create(url, values) {
    return client.post(url, values);   
  }

  update(url, values) {
    return client.put(url, values);   
  }
}

const boatAPI = new Boat();
export default boatAPI;