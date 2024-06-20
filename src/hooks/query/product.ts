import axios from "../../lib/axios";

export const fetchProducts = async (title? : string) => {
  try {
    const res = await axios.get(`/products?title=${title}`);
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
