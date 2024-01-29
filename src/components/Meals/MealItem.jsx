import IncreaseQty from "./IncreaseQty";
import classes from "./Meal.module.css";
import { useState } from "react";
const MealItem = ({ item, addToCart, cartItems }) => {
  const [itemQty, setQty] = useState(1);
  const [click, setClick] = useState(false);

  const handleAdd = () => {
    addToCart([...cartItems, { ...item, qty: itemQty }]);
    setClick(true);
  };
  return (
    <div className={classes.mealItem}>
    <div>
      <p className={`${classes.bold} ${classes.font20}`}>{item.foodName}</p>
      <p>{item.aboutFood}</p>
      <p className={classes.bold}>{`$${item.price}`}</p>
    </div>
    <div>
    <IncreaseQty itemQty={itemQty} setQty={setQty}></IncreaseQty>
        <button
          className={!click ? classes.addBtn : classes.addBtnGreen}
          onClick={handleAdd}
        >
          +Add
        </button>
      </div>
    </div>
  );
};
export default MealItem;