import client from '../../config/client';

class Category {
  fetch() {
    return client.get('/categories');   
  }
}

const categoryAPI = new Category();
export default categoryAPI;