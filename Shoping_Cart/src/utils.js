import axios from "axios";

export const ALLOWED_CATEGORIES = {
  MENS: "men's clothing",
  WOMENS: "women's clothing",
};

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCategoryProducts = async (_category) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/category/${_category}`
    );
    console.log("fetchCategoryProducts", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
