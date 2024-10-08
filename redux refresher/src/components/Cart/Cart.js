import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((i, iId) => (
          <CartItem key={iId}
            item={{
              title: "Test Item",
              quantity: i.count,
              total: 18,
              price: 6,
              id: i.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
