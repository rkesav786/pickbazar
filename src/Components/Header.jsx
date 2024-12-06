import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.webp";
import { GiFruitBowl } from "react-icons/gi";
import style from "./style.module.css";

const Header = () => {
  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style.nav_left}>
            <ul className={style.menu_list}>
              <li>
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li className={style.display}>
                <button className={style.grocery_btn}>
                  <GiFruitBowl />
                  <span>Grocery</span>
                </button>
              </li>
            </ul>
          </div>
          <div className={style.nav_right}>
            <ul className={style.menu_list}>
              <li className={style.display}>
                <Link to="/shops">
                  <p>Shops</p>
                </Link>
              </li>
              <li className={style.display}>
                <Link to="/offers">
                  <p>Offercs</p>
                </Link>
              </li>
              <li className={style.display}>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li className={style.display}>
                {/* <Link to="/page"> */}
                <p>Page</p>
                {/* </Link> */}
              </li>
              <li>
                <button className={style.header_btn}>Join</button>
              </li>
              <li>
                <button className={style.header_btn}>Become a Seller</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
