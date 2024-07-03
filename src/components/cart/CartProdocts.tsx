import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, selectItems, addToCart } from "../../feature/cartSlice";
import ImageCard from "../common/ImageCard";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { ICart } from "../../interfaces/cart";

interface Props {
  product: ICart;
}

const CartProdocts: React.FC<Props> = ({ product }) => {
  const cartItems: ICart[] = useSelector(selectItems);
  const dispatch = useDispatch();


  const handlerRemoveItem = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    type?: string
  ) => {
    let productData = [];
    const index = cartItems.findIndex((item) => item.id === id);
    const newBasket = [...cartItems];
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(`Can't remove product (id: ${id}) as its not in basket!`);
      // return;
    }

    if (type === "add") {
      // console.log("add", product);
      productData = [
        ...newBasket,
        {
          ...product,
          quantity: Number(product?.quantity) + 1,
        },
      ];
      dispatch(
        addToCart({
          items: productData,
        })
      );
    } else if (type === "reduce") {
      // console.log("reduce", product);
      // @ts-ignore
      if (product?.quantity <= 1) {
        dispatch(
          removeCart({
            items: newBasket,
          })
        );
      } else {
        productData = [
          ...newBasket,
          {
            ...product,
            quantity: Number(product?.quantity) - 1,
          },
        ];
        dispatch(
          addToCart({
            items: productData,
          })
        );
      }
    } else {
      console.log("delete", product);
      dispatch(
        removeCart({
          items: newBasket,
        })
      );
    }
  };

  return (
    <>
      <div className="py-2 border-b">
        <div className="flex flex-col items-center mobile:flex-row mobile:items-start gap-y-4 space-x-3">
          <ImageCard productImage={product?.image} />

          <div className="flex flex-col md:flex-row gap-y-4 items-start justify-between w-full">
            <div>
              <h3 className="text-black text-xl">{product?.title}</h3>
              <span className="bg-green-500 text-[10px] font-normal p-1 text-white">
                In stock
              </span>
              <p className="text-xs my-2 line-clamp-3">
                {product?.description}
              </p>
              <div className="">
                <h3 className="mb-2 text-lg text-black font-medium">
                ₹{Number(product?.price) * Number(product?.quantity)}
                </h3>
                <div>
                  <div>
                    <button
                      className="button"
                      onClick={(e) => handlerRemoveItem(e, Number(product?.id), "reduce")}
                    >
                      <HiOutlineMinusSm />
                    </button>
                    <span className="mx-2">{product?.quantity}</span>
                    <button
                      className="button"
                      onClick={(e) =>
                        handlerRemoveItem(e, Number(product?.id), "add")
                      }
                    >
                      <HiOutlinePlusSm />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <button
                className="whitespace-nowrap button"
                onClick={(e) => handlerRemoveItem(e, Number(product?.id), "delete")}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProdocts;
