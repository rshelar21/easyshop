import React from "react";
import { ICart } from "../interfaces/cart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectItems, totalPrice } from "../feature/cartSlice";
import CartProdocts from "../components/Cart/CartProdocts";
import axios from "../lib/axios";
import { selectUser } from "../feature/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import { removeCart } from "../feature/cartSlice";
import { toastWarning } from "../components/common/Toastify";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);

const Cart = () => {
  const cartItem: ICart[] = useSelector(selectItems);
  const productTotal = useSelector(totalPrice);
  const userDetails = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const stripe: any = await stripePromise;
      if (cartItem.length === 0) {
        return;
      }

      const res = await axios.post(
        "/create-checkout-session",
        {
          items: cartItem,
          email: userDetails.email,
        },
      );

      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });
      console.log(result);
      console.log("caaaaaaaaa");
      dispatch(
        removeCart({
          items: [],
        })
      );
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.message === "token expired") {
        toastWarning("Please login again");
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className="relative mt-[56px] p-3 min-h-screen">
        {Array.isArray(cartItem) && cartItem.length ? (
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
            <div className="bg-white px-4 py-5 col-span-1 md:col-span-7">
              <div className="pb-2 border-b">
                <h2 className="text-3xl">Shopping Cart</h2>
              </div>

              <div>
                {cartItem?.map((item, index) => (
                  <CartProdocts product={item} key={index} />
                ))}
              </div>
            </div>

            <div className="px-4 py-5 col-span-1 md:col-span-3 bg-white h-fit sticky top-28">
              <div>
                <h3 className="text-lg">
                  Subtotal ({cartItem?.length} items){" "}
                  <span className="text-black font-medium">
                    Rs. : {productTotal.toFixed(2)}
                  </span>
                </h3>

                <button className="button w-full mt-2" onClick={handlerBuy}>
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full min-h-screen flex justify-center items-center relative">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center">
                <IoCartOutline className="text-9xl text-gray-400" />
                <h2 className="text-3xl text-gray-400">Your cart is empty</h2>
              </div>
              <Link to="/products" className="button">
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
