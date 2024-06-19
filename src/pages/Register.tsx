import React from "react";
import Layout from "../components/common/Layout";
import RegisterLayout from "../components/register/RegisterLayout";

const RegisterPage: React.FC = () => {
  return (
    <Layout title="Register">
      <RegisterLayout />
    </Layout>
  );
};

export default RegisterPage;
