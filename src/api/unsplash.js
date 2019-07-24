import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 1055a0d01dc3467db1b1f67cd7eb5b42f34c9b7dc2ea9d6371494f6cf5b568ab'
  }
});
