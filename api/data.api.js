import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getProductFunction = async () => {
  const { data } = await axios.get(`${BASE_URL}/products/`);
  return data;
};

export const getCategoryFunction = async () => {
  const { data } = await axios.get(`${BASE_URL}/categories/`);
  return data;
};

export const getSingleProductFunction = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`);
  return data;
};
