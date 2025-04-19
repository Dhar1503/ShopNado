import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  } catch (err) {
    console.error('Failed to fetch products', err);
    return [];
  }
};
