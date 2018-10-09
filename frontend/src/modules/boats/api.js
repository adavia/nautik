import client from '../../config/client';

class Boat {
  fetch() {
    return client.get('/boats');   
  }

  show(id) {
    return client.get(`/boats/${id}`);   
  }

  create(values) {
    return client.post('/boats', values);   
  }

  update(id, values) {
    return client.put(`/boats/${id}`, values);   
  }
}

const boatAPI = new Boat();
export default boatAPI;