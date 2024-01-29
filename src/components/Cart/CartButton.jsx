import { useState } from "react";
import classes from "./CartButton.module.css";

const CartButton = ({ cartCount, showModal }) => {
  return (
    <button className={classes.cartButton} onClick={() => showModal(true)}>
      <span className={`material-symbols-outlined`}> shopping_cart </span>
      Your Cart
      <span className={classes.qty}> {cartCount} </span>  
    </button>
  );
};

export default CartButton;