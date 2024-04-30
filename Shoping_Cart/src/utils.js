import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fecthProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  console.log(response.data);
  return response.data;
};
