import headerImage from "../../assets/images/header.jpg";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";
import Summary from "./Summary";
const Header = ({ cartCount, showModal }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.mainHeading}>Kumar's Kitchen</h1>
        <CartButton cartCount={cartCount} showModal={showModal}></CartButton>
      </header>
      <div className={classes.imageContainer}>
        <img src={headerImage} className={classes.image}></img>
        <Summary></Summary>
      </div>
    </>
  );
};

export default Header;