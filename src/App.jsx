import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Shops from "./Pages/Shops/Shops";
import Offers from "./Pages/Offers/Offers";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header";
import Checkout from "./Components/Widgets/checkout";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/offerce" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;