import React from "react";
import { IProduct } from "../../interfaces/products";
import { LazyLoadImage } from "react-lazy-load-image-component";


interface Props {
  product: Partial<IProduct>;
}

const OrdersCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="flex flex-col w-[200px] p-2 border items-center">
        <div className="h-[150px] w-[150px]">
           <LazyLoadImage
            src={product?.image}
            alt="product-img"
            className="object-contain h-[150px] w-full"
            effect="blur"
          />
        </div>
        <div>
          <h3 className="text-black text-base line-clamp-2">
            {product?.title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default OrdersCard;
