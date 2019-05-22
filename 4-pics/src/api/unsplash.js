import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b55d9c0355ade9edf5405e5fabd6819165a3b81110c53a907e8ae48a361d1ff7'
  }
});
