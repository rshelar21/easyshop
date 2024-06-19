import React from "react";
import CartLayout from "../components/cart/CartLayout";
import Layout from "../components/common/Layout";

const CartPage: React.FC = () => {
  return (
    <Layout title="Cart">
      <CartLayout />
    </Layout>
  );
};

export default CartPage;
