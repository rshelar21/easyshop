import axios from "../../lib/axios";

export const getUser = async () => {
  try {
    const res = await axios.get("/account-details");
    // console.log(res, "res");
    return res.data;
  } catch (error: any) {
    // console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
