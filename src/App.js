import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Main/Main";
import Catalog from "./pages/Catalog/Catalog";
import Contacts from "./pages/Contacts/Contacts";
import DeliveryPayment from "./pages/DeliveryPayment/DeliveryPayment";
import LoginModal from "./components/LoginModal/LoginModal";
import CartModal from "./components/CartModal/CartModal";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import { CartProvider } from './context/CartContext';

const AppContent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowLogin(false);
    }
    if (location.pathname === "/checkout") {
      setShowCart(false);
    }
  }, [location.pathname]);
  
  const toggleLogin = () => {
    setShowCart(false);
    setShowLogin(prev => !prev);
  };
  
  const toggleCart = () => {
    setShowLogin(false); 
    setShowCart(prev => !prev);
  };

  return (
    <>
      {showLogin && <LoginModal onClose={toggleLogin} />}
      {showCart && <CartModal onClose={toggleCart} />}
      <div className="full-page">
        <div className="sticky-header">
          <Header />
          <Navigation toggleLogin={toggleLogin} toggleCart={toggleCart} />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery-payment" element={<DeliveryPayment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <CartProvider>
      <AppContent />
    </CartProvider>
  </Router>
);

export default App;