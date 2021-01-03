import axios from 'axios';

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/${process.env.VUE_APP_API_KEY}`,
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(res => res.data);
  },
};

export default api;
