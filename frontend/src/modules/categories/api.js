import client from '../../config/client';

class Category {
  fetch(url) {
    return client.get(url);   
  }
}

const categoryAPI = new Category();
export default categoryAPI;