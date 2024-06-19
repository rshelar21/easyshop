import React from "react";
import Layout from "../components/common/Layout";
import ProductsLayout from "../components/products/ProductsLayout";

const ProductsPage: React.FC = () => {
  return (
    <Layout title="Products">
      <ProductsLayout />
    </Layout>
  );
};

export default ProductsPage;
