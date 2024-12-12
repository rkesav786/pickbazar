import React, { useState, useRef } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Offers from "../Offers/Offers";
import ProductCard from "../../Components/Widgets/ProductCard";
import style from "./style.module.css";

export const Home = () => {
  const [isOpen, setSidemenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const sidemenuRef = useRef(null);
  const navigate = useNavigate();

  const toggle = () => {
    setSidemenu(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (sidemenuRef.current && !sidemenuRef.current.contains(e.target)) {
      setSidemenu(false);
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleGoToCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };

  return (
    <>
      <div>
        <div className={style.bg_img}>
          <div className={style.head_container}>
            <p className={style.heading}>Groceries Delivered in 90 Minutes</p>
            <p className={style.sub_heading}>
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </p>
            <div className={style.input_container}>
              <input
                className={style.input_box}
                type="text"
                placeholder="Search your product from here"
              />
              <button className={style.input_btn}>Search</button>
            </div>
          </div>
        </div>
        <div className={style.sidemenu_cart_btn_container}>
          <button className={style.sidemenu_cart_btn} onClick={toggle}>
            <TfiShoppingCartFull />
            <span>Item</span>
            <p>
              $
              {Math.min(
                999,
                cartItems
                  .reduce((total, item) => total + item.offer_price, 0)
                  .toFixed(2)
              )}
            </p>
          </button>
        </div>

        {isOpen && (
          <div
            ref={sidemenuRef}
            className={style.sidemenu_container + " " + style.active}
          >
            <div className={style.sidemenu}>
              <h3>Cart</h3>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className={style.cart_item}>
                    <img src={item.image} alt={item.name} width={50} />
                    <p>{item.name}</p>
                    <p>${item.offer_price}</p>
                  </div>
                ))
              ) : (
                <p>Your cart is empty!</p>
              )}
              <button onClick={handleGoToCheckout}>Go to Checkout</button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Offers />
      </div>
      <div>
        <ProductCard onAddToCart={handleAddToCart} />
      </div>
    </>
  );
};
