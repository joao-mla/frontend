import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export default function Cart({ onClose, onCheckout }) {
  const { cart, removeFromCart } = useContext(ProductContext);
  let price = 0;

  return (
    <>
      <div className="cart">
        <h2>Your cart</h2>
        <ul>
          {cart &&
            cart.map((item, itemId) => {
              price += +item.price;
              return (
                <li className="modal-actions" key={itemId}>
                  <p>{item.name}</p>
                  <button
                    className="text-button"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
        <p className="cart-total">Total: {price}€</p>
        <button className="button" onClick={onClose}>
          Close
        </button>
        <button className="button" onClick={onCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
}
