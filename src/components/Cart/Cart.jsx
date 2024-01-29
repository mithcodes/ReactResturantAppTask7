import classes from "./cart.module.css";
import Model from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = ({ showModal, cartItems, setCartItem }) => {
  const totalPrice = cartItems.reduce((acc, curr) => {
    
    return acc + curr.price * curr.qty;
  }, 0);
  return (
    <Model>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          
          <CartItem
            item={item}
            cartItems={cartItems}
            setCartItem={setCartItem}
          ></CartItem>
        ))}
      </ul>
      <div>{`Total Price = $ ${totalPrice}`}</div>
      <div>
        <button
          className={classes.cartListBtn}
          onClick={() => showModal(false)}
        >
          Cancel
        </button>
        <button className={classes.cartListBtn}>Order</button>
      </div>
    </Model>
  );
};
export default Cart;