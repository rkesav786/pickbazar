import React, { useState, useEffect } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { fetchProducts } from "../../action";
import style from "../style.module.css";
import { CategoryLabel } from "../Healper";
import {
  GiFruitBowl,
  TbMeatOff,
  SiDatadog,
  GiLiquidSoap,
  LuMilk,
  LuCookingPot,
  GiRiceCooker,
  MdOutlineEmojiFoodBeverage,
  RiHealthBookLine,
} from "../Healper/Icon";

const ProductCard = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  const handleCategorySelect = async (category) => {
    const categoryProducts = await fetchProducts(category);
    setProducts(categoryProducts);
  };

  useEffect(() => {
    const loadInitialProducts = async () => {
      const categories = [
        "fruits&vegetables",
        "meat&fish",
        "snacks",
        "pet&care",
        "dairy",
        "cooking",
      ];
      const allProducts = await Promise.all(
        categories.map((category) => fetchProducts(category))
      );
      setProducts(allProducts.flat());
    };
    loadInitialProducts();
  }, []);

  const navItems = [
    {
      label: "Fruits & Vegetables",
      category: "fruits&vegetables",
      icon: <GiFruitBowl />,
    },
    { label: "Meat & Fish", category: "meat&fish", icon: <TbMeatOff /> },
    { label: "Snacks", category: "snacks", icon: <SiDatadog /> },
    { label: "Pet Care", category: "pet&care", icon: <GiLiquidSoap /> },
    { label: "Home & Cleaning", category: "home", icon: <LuMilk /> },
    { label: "Dairy", category: "dairy", icon: <LuCookingPot /> },
    { label: "Cooking", category: "cooking", icon: <GiRiceCooker /> },
    {
      label: "BreakFast",
      category: "breakfast",
      icon: <MdOutlineEmojiFoodBeverage />,
    },
    { label: "Beverage", category: "beverage", icon: <RiHealthBookLine /> },
    {
      label: "Health & Beauty",
      category: "health&beauty",
      icon: <GiFruitBowl />,
    },
  ];

  return (
    <div className={style.product_container}>
      <div className={style.productlist_nav_container}>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <div
                  className={style.side_nav_list}
                  onClick={() => handleCategorySelect(item.category)}
                >
                  {item.icon}
                  <span>
                    <CategoryLabel text={item.label} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={style.card_container}>
        <div className={style.card_wrap}>
          {products.map((item, index) => (
            <div className={style.card} key={index}>
              {item.offer_percentage && (
                <p className={style.tag}>{item.offer_percentage}</p>
              )}
              <img src={item.image} alt={item.name} width={200} />
              <p>{item.name}</p>
              {item.previous_price && (
                <p className={style.price}>
                  <del>{item.previous_price}</del>
                </p>
              )}
              <p>{item.offer_price}</p>
              <div className={style.cart_btn_container}>
                <button
                  className={style.cart_btn}
                  onClick={() => onAddToCart(item)}
                >
                  <TfiShoppingCartFull />
                  <span>Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
