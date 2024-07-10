import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductPage from "./pages/productPage/ProductPage";
import Category from "./pages/categoryPage/CategoryPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar className="border-bottom border-dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="category" element={<Category />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
