import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectItems } from "../../feature/cartSlice";
import { IProduct } from "../../interfaces/products";

const MAX_RATING = 5;
const MIN_RATING = 1;

interface ICart extends IProduct {
  quantity?: number;
}

interface IProductCardProps {
  product: IProduct;
}

const ProductsCard: React.FC<IProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectItems);
  console.log(cartItem, "cartItem");
  const [rating] = useState<number>(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const handleraAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const list = cartItem.filter((item: ICart) => item.id === product.id);
    console.log(list);
    if (list.length) {
      const index = cartItem.findIndex((item) => item.id === product.id);
      const newBasket = [...cartItem];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product as its not in basket!`);
      }
      const productData = [
        ...newBasket,
        {
          ...product,
          quantity: Number(list[0]?.quantity) + 1,
        },
      ];
      dispatch(
        addToCart({
          items: productData,
        })
      );
    } else {
      const productData = [
        ...cartItem,
        {
          ...product,
          quantity: 1,
        },
      ];
      dispatch(
        addToCart({
          items: productData,
        })
      );
    }
  };
  return (
    <>
      <div className="relative flex flex-col bg-white p-5 m-5 z-30">
        <p className="text-right pb-1 text-xs italic text-gray-400">
          {product?.category}
        </p>

        <div className="w-[200px] h-[200px] mx-auto">
          <img
            src={product?.image}
            alt="product-img"
            className="w-full h-full object-contain"
          />
        </div>
        <h4 className="my-3">{product?.title}</h4>

        <div className="flex">
          {Array<number>(rating)
            .fill(0)
            .map((_, i) => (
              <StarIcon className="h-4  text-yellow-400" key={i} />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2">{product?.description}</p>

        <p className="mb-2 text-sm">${product?.price}</p>

        <button className="button mt-auto" onClick={handleraAddCart}>
          Add to basket
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
