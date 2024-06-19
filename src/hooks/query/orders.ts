import axios from "../../lib/axios";

export const getOrdersHistory = async () => {
  try {
    const res = await axios.get("/orders");
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
