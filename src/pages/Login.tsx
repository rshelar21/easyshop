import React from "react";
import Layout from "../components/common/Layout";
import LoginLayout from "../components/login/LoginLayout";

const LoginPage: React.FC = () => {
  return (
    <Layout title="Login">
      <LoginLayout />
    </Layout>
  );
};

export default LoginPage;
