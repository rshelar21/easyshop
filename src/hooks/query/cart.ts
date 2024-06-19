import axios from "../../lib/axios";
import { ICart } from "../../interfaces/cart";

export const createCheckoutSession = async ({
  items,
  email,
}: {
  items: ICart[];
  email: string;
}) => {
  try {
    const res = await axios.post("/create-checkout-session", {
      items: items,
      email: email,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
