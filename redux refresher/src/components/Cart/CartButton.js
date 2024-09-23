import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.counter);
  console.log(count);
  const toggleCount = count > 0;

  const toggleCartHandler = () => {
    console.log("toggle");
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      {toggleCount && <span className={classes.badge}>{count}</span>}
    </button>
  );
};

export default CartButton;
