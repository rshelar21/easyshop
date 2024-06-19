import axios from "../../lib/axios";

export const fetchProducts = async () => {
  try {
    const res = await axios.get("/products");
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
