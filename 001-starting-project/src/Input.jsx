import { useState } from "react";

export default function Input({ inputValues, onChange }) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label> Initial Investment </label>
            <input
              type="number"
              value={inputValues.initialInvestment}
              id="initialInvestment"
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label> Annual Investment </label>
            <input
              type="number"
              value={inputValues.annualInvestment}
              id="annualInvestment"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label> Expected Return </label>
            <input
              type="number"
              value={inputValues.expectedReturn}
              id="expectedReturn"
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label> Duration </label>
            <input
              type="number"
              value={inputValues.duration}
              id="duration"
              onChange={onChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}
