import React from "react";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";
import "react-lazy-load-image-component/src/effects/blur.css";
const CartPage = React.lazy(() => import("./pages/Cart"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const ProductsPage = React.lazy(() => import("./pages/Products"));
const OrdersHistoryPage = React.lazy(() => import("./pages/OrdersHistory"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders-history" element={<OrdersHistoryPage />} />
            </Routes>
          </React.Suspense>
          <Toaster />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
