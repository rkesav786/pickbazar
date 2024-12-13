import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./checkout.module.css";

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state ? location.state.cartItems : [];

  const totalPrice = cartItems
    .reduce((total, item) => total + item.offer_price, 0)
    .toFixed(2);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className={styles.checkout_container}>
      <div className={styles.form_container}>
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Contact Number</h3>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your contact number"
          />
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Billing Address</h3>
          <textarea
            className={styles.textarea}
            placeholder="Enter your billing address"
          ></textarea>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Shipping Address</h3>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your shipping address"
          />
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Delivery Schedule</h3>
          <div className={styles.deliveryOptions}>
            <div className={styles.deliveryOption}>
              <h4 className={styles.optionTitle}>Express Delivery</h4>
              <p className={styles.optionTime}>07:00 AM - 02:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.order_container}>
        <div className={styles.orderSummary}>
          <h3 className={styles.sectionTitle}>Your Order</h3>
          <div className={styles.order_box}>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item, index) => (
                  <div key={index} className={styles.order_item}>
                    <img src={item.image} alt={item.name} width={50} />
                    <p>{item.name}</p>
                    <p>${item.offer_price}</p>
                  </div>
                ))}
                <div className={styles.total_price}>
                  <h4>Total:</h4>
                  <p>${totalPrice}</p>
                </div>
                <button
                  className={styles.place_orderBtn}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </>
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
