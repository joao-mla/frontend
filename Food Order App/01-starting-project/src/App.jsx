import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductContextProvider from "./components/ProductContext";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [checkoutModalIsOpen, setCheckoutModalIsOpen] = useState(false);

  function handleOpenCartModal() {
    setCartModalIsOpen(true);
  }

  function handleCloseCartModal() {
    setCartModalIsOpen(false);
  }

  function handleOpenCheckoutModal() {
    setCheckoutModalIsOpen(true);
  }

  function handleCloseCheckoutModal() {
    setCheckoutModalIsOpen(false);
  }

  return (
    <>
      <ProductContextProvider>
        <Modal open={cartModalIsOpen} onClose={handleCloseCartModal}>
          <Cart
            onClose={handleCloseCartModal}
            onCheckout={() => {
              handleCloseCartModal();
              handleOpenCheckoutModal();
            }}
          />
        </Modal>
        <Modal open={checkoutModalIsOpen} onClose={handleCloseCheckoutModal}>
          <Checkout onClose={handleCloseCheckoutModal} />
        </Modal>
        <Header handleClickCartButton={handleOpenCartModal} />
        <Products></Products>
      </ProductContextProvider>
    </>
  );
}

export default App;
