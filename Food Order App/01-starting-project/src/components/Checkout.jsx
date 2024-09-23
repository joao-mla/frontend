import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export default function Checkout({ onClose }) {
  const { cart } = useContext(ProductContext);

  let total = 0;

  cart.forEach((element) => {
    total += +element.price;
  });

  function handleSubmitCheckout(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customer = Object.fromEntries(fd.entries());

    const order = { order: { items: cart, customer: customer } };
    console.log(order);
    checkout(order);
    onClose();
  }

  async function checkout(order) {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to order");
    }

    console.log(resData);
  }

  return (
    <>
      <div>
        <h2>Checkout</h2>
        <p>Total: {total}€</p>
        <form className="control" onSubmit={handleSubmitCheckout}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" required />
          <label htmlFor="email">E-Mail Address</label>
          <input type="email" name="email" required />
          <label htmlFor="street">Street</label>
          <input type="text" name="street" required />
          <label htmlFor="postal-code">Postal Code</label>
          <input
            type="text"
            name="postal-code"
            pattern="\d{4}([\-]\d{3})?"
            required
          />
          <label htmlFor="city">City</label>
          <input type="text" name="city" required />

          <div className="modal-actions">
            <button className="text-button" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="button">
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
