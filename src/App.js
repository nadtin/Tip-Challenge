import { useState } from "react";
import "./styles.css";

// Main Application
export default function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const resetValues = () => {
    setBillAmount("");
    setTip1(0);
    setTip2(0);
  };

  const totalTip = (billAmount * (tip1 + tip2)) / 2 / 100;

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <BillAmount setBillAmount={setBillAmount} billAmount={billAmount} />
      <TipCalc percentage={tip1} onSelect={setTip1}>
        How did you like the service?
      </TipCalc>
      <TipCalc percentage={tip2} onSelect={setTip2}>
        How did your friend like the service?
      </TipCalc>
      {billAmount > 0 && (
        <>
          <TotalBill totalTip={totalTip} billAmount={billAmount} />
          <ResetButton onReset={resetValues} />
        </>
      )}
    </div>
  );
}

// Component - Amount
const BillAmount = ({ setBillAmount, billAmount }) => {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
    </div>
  );
};

// Component - Percentage
const TipCalc = ({ children, percentage, onSelect }) => {
  const tipChangeHandler = (e) => onSelect(Number(e.target.value));
  return (
    <div>
      <label>{children}</label>
      <select onChange={tipChangeHandler} value={percentage}>
        <option value="0">Not Satisfied (0%)</option>
        <option value="5">Satisfied (5%)</option>
        <option value="10">It was Good! (10%)</option>
        <option value="20">It was Amazing! (20%)</option>
      </select>
    </div>
  );
};

// Component - Total
const TotalBill = ({ totalTip, billAmount }) => {
  return (
    <div>
      <h2>
        You pay ${billAmount + totalTip} (${billAmount} bill + ${totalTip} tip)
      </h2>
    </div>
  );
};

// Component - Reset
const ResetButton = ({ onReset }) => {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
