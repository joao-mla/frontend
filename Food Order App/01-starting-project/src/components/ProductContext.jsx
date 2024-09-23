import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext({
  items: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default function ProductContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();
      setItems(resData);
    }

    fetchItems();
  }, []);

  function addToCart(item) {
    setCart((prev) => {
      const newCart = [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
        },
      ];
      console.log(newCart);
      return newCart;
    });
  }

  function removeFromCart(item) {
    setCart((prev) => {
      const index = cart.findIndex((i) => i.name === item.name);
      if (index !== -1) {
        return prev.filter((i, itemId) => itemId !== index);
      }
      return prev;
    });
  }

  const ctxValue = {
    items: items,
    cart: cart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return (
    <ProductContext.Provider value={ctxValue}>
      {children}
    </ProductContext.Provider>
  );
}
