export default function Product({
  name,
  price,
  description,
  image,
  id,
  onAddToCart,
}) {
  return (
    <>
      <div className="meal-item">
        <article>
          <img src={image} />
          <h3>{name}</h3>
          <p className="meal-item-price">{price}€</p>
          <p className="meal-item-description">{description}</p>
          <button
            className="meal-item-actions but ton"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </button>
        </article>
      </div>
    </>
  );
}
