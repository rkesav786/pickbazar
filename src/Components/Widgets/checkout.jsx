import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./checkout.module.css";

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state ? location.state.cartItems : [];

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
              <p className={styles.optionTime}>12:00 AM - 11:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.order_container}>
        <div className={styles.orderSummary}>
          <h3 className={styles.sectionTitle}>Your Order</h3>
          <div className={styles.order_box}>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className={styles.order_item}>
                  <img src={item.image} alt={item.name} width={50} />
                  <p>{item.name}</p>
                  <p>${item.offer_price}</p>
                </div>
              ))
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
