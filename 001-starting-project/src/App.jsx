import Header from "./components/Header";
import Calculator from "./components/Calculator";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  return (
    <>
      <Header />
      <Calculator />
    </>
  );
}

export default App;
