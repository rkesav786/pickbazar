import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Shops from "./Pages/Shops/Shops";
import Offers from "./Pages/Offers/Offers";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import style from "./style.module.css";

// const App = () => {
//   const [data, setData] = useState([]);
//   console.log("data :", data);

//   // let { offer_percentage,image,name,previouse_price,offer_price}= data
//   // console.log(offer_percentage,image,name,previouse_price,offer_price);

//   // const { name , image ,price} = data || {}

//   useEffect(() => {
//     fetch("http://localhost:3001/fruits")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((eror) => console.log(eror));
//   }, []);
//   return (
//     <>
//       <div>App</div>
//       <div className={style.container}>
//         <div className={style.card_wrap}>
//           <div className={style.card}>
//             { data.map((item,index)=>(
//              <div key={index} className={style.card_item}>
//               <p>{item.offer_percentage}</p>
//               <img src={item.image} alt="" />
//               <p>{item.name}</p>
//               <p><del>{item.previuse_price}</del></p>
//               <p>{item.offer_price}</p>
//              </div>
//             ))}
//             <p>dqw</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
