import { useState } from "react";
import IncreaseQty from "../Meals/IncreaseQty";
import classes from "./cart.module.css";


const CartItem = ({ item, cartItems, setCartItem }) => {
  const [qty, setQty] = useState(item.qty);
  return (
   
    <li>
      <div className={classes.cartItemContainer}>
        <div>{item.foodName}</div>
        <div>{item.price}</div>
      </div>
      <din>
        <IncreaseQty setQty={setQty} itemQty={qty}></IncreaseQty>
      </din>
    </li>
  );
};
export default CartItem;