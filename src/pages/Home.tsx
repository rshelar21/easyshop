import React from "react";
import Layout from "../components/common/Layout";
import HomeLayout from "../components/home/HomeLayout";

const HomePage: React.FC = () => {
  return (
    <Layout title="Home">
      <HomeLayout />
    </Layout>
  );
};

export default HomePage;
