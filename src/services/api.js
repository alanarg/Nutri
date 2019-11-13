// import $ from 'jquery';
import axios from 'axios';

const api = axios.create({ baseURL: `https://cors-anywhere.herokuapp.com/https://taco-food-api.herokuapp.com/api/v1/category`});

export default api;



