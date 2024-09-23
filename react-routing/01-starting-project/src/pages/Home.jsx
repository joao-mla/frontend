import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <div>
      <p>Hello!</p>
      <button>
        <Link to="/products">Products</Link>
      </button>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}

export default HomePage;
