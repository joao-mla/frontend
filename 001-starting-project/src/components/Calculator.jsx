import Input from "../Input";
import CalculatorTable from "./CalculatorTable";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function Calculator() {
  const [results, setResults] = useState([]);
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(e) {
    setInputValues((prev) => {
      const property = e.target.id;
      const updatedValue = +e.target.value;

      const updatedValues = {
        ...prev,
        [property]: updatedValue,
      };

      compute(updatedValues);

      return updatedValues;
    });
  }

  function compute(values) {
    console.log("test");
    const calculatedResult = calculateInvestmentResults(values);
    setResults(calculatedResult);
  }

  return (
    <>
      <Input onChange={handleChange} inputValues={inputValues} />
      <CalculatorTable results={results} />
    </>
  );
}
