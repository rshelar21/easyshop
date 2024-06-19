import React from "react";
import OrdersCard from "./OrdersCard";
import { IProduct } from "../../interfaces/products";

interface Props {
  products: Partial<IProduct>[];
}

const OrdersCardsList: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {products?.map((item, index) => (
          <OrdersCard product={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default OrdersCardsList;
