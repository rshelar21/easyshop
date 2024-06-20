import axios from "../../lib/axios";

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`/products`);
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};

export const queryProducts = async (title? : string) => {
  try {
    const res = await axios.get(`/search-products?title=${title}`);
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
