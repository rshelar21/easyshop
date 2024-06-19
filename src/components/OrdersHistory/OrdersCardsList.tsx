import React from "react";
import OrdersCard from "./OrdersCard";
import { IProduct } from "../../interfaces/products";

interface Props {
  products: Partial<IProduct>[];
}

const OrdersCardsList: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="flex p-1 space-x-2">
        {products?.map((item, index) => (
          <OrdersCard product={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default OrdersCardsList;
