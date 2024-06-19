import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ProductsPage from "./pages/Products";
import OrdersHistoryPage from "./pages/OrdersHistory";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders-history" element={<OrdersHistoryPage />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;
