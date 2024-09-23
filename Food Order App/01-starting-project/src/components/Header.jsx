export default function Header({ handleClickCartButton }) {
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src="logo.jpg" alt="logo" />
          <p>OrderFood.come</p>
        </div>
        <nav>
          <button onClick={handleClickCartButton}>Cart</button>
        </nav>
      </header>
    </>
  );
}
