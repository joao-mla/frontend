import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addItem = useSelector((state) => state.cart.addItem);
  const { title, price, description, id } = props;

  const addItemHandler = () => {
    dispatch(cartActions.addItem(id));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
