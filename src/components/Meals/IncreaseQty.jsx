import React from "react";
import classes from "./Meal.module.css";

const IncreaseQty = ({ setQty, itemQty }) => {
  const increment = () => {
    setQty((pre) => {
      if (pre < 5 && pre > 0) return pre + 1;
      else return 5;
    });
  };

  const decrement = () => {
    setQty((pre) => {
      if (pre < 6 && pre > 1) return pre - 1;
      else return 1;
    });
  };

  return (
    <div className={classes.increaseQty}>
      <label>Quantity</label>
      <div className={classes.qtyContainer}>
        <div className={classes.handlerBtn} onClick={decrement}>
          -
        </div>
        <div className={classes.qty}>{itemQty}</div>
        <div className={classes.handlerBtn} onClick={increment}>
          +
        </div>
      </div>
    </div>
  );
};

export default IncreaseQty;
