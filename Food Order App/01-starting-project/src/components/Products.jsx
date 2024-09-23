import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "./ProductContext";

export default function Products() {
  const { items, addToCart } = useContext(ProductContext);

  function handleAddToCart(id) {
    addToCart(items[id]);
  }

  return (
    <div id="meals">
      {items &&
        items.map((item, itemId) => (
          <Product
            key={item.id}
            id={itemId}
            image={`http://localhost:3000/${item.image}`}
            name={item.name}
            description={item.description}
            price={item.price}
            onAddToCart={handleAddToCart}
          />
        ))}
    </div>
  );
}
