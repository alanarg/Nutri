import axios from 'axios';
const alimento = axios.create({ baseURL:`https://cors-anywhere.herokuapp.com/https://taco-food-api.herokuapp.com/api/v1/food`});
export default alimento;
