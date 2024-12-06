import React, { useState } from "react";
import style from "./style.module.css";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useRef } from "react";
import Offers from "../Offers/Offers";

export const Home = () => {
  const [isopen, Setsidemenu] = useState(false);
  const sidemenuRef = useRef(null)

  const toggle = () => {
    Setsidemenu(!isopen);
  };

  const handleClickOutside = (e) => {
    if (sidemenuRef.current && !sidemenuRef.current.contains(e.target)) {
      Setsidemenu(false);
    }
  };
  if (isopen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return (
    <>
      <div>
        <div className={style.bg_img}>
          <div className={style.head_container}>
            <p className={style.heading}>Groceries Delivered in 90 Minute</p>
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
            <p>$0.00</p>
          </button>
        </div>

        {isopen && (
          <div ref={sidemenuRef} className={style.sidemenu_container+ " " + style.active}>
            <div className={style.sidemenu}>
              <p>side menu</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <Offers/>
      </div>
    </>
  );
};
