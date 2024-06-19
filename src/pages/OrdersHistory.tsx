import React from "react";
import Layout from "../components/common/Layout";
import OrderHistoryLayout from "../components/OrdersHistory/OrderHistoryLayout";

const OrdersHistoryPage: React.FC = () => {
  return (
    <Layout title="Orders History">
      <OrderHistoryLayout />
    </Layout>
  );
};

export default OrdersHistoryPage;
