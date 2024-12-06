import React, { useState, useRef, useEffect } from "react";
import style from "./style.module.css";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Offers = () => {
  const [data, setData] = useState([]);
  const wrapcontainerRef = useRef(null); // Initialize the ref

  console.log("data from json serve :", data);

  useEffect(() => {
    fetch("http://localhost:3001/offerscard")
      .then((response) => response.json())
      .then((Data) => setData(Data))
      .catch((error) => console.log(error));
  }, []);

  const scrollLeft = (distance = 500) => {
    if (wrapcontainerRef.current) {
      wrapcontainerRef.current.scrollBy({ left: -distance, behavior: "smooth" });
    }
  };

  const scrollRight = (distance = 500) => {
    if (wrapcontainerRef.current) {
      wrapcontainerRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={style.offercard_container}>
        <button className={style.scroll_btn} onClick={() => scrollLeft()}>
          <SlArrowLeft />
        </button>
        <div className={style.card_wrapp} ref={wrapcontainerRef}>
          {data.map((item, index) => (
            <div className={style.card} key={index}>
              <img src={item.image} width={400} alt="offercard image" />
            </div>
          ))}
        </div>
        <button className={style.scroll_btn} onClick={() => scrollRight()}>
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Offers;
