import React, { useState } from "react";

const InterestCalculator = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [months, setMonths] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);

  const handleCalculate = () => {
    const amount = parseFloat(totalAmount);
    const term = parseInt(months, 10);

    if (!amount || !term || term <= 0) {
      alert("Please enter valid values.");
      return;
    }

    const interestRate = 0.2; // 20% fixed interest rate
    const totalWithInterest = amount * (1 + interestRate);
    const monthlyInstallment = totalWithInterest / term;

    setTotalPayable(totalWithInterest.toFixed(2));
    setMonthlyPayment(monthlyInstallment.toFixed(2));
  };

  return (
    <div className="interest-calculator">
      <h2>Interest Calculator</h2>
      <label>
        Shopping Total ($):
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          placeholder="Enter total amount"
        />
      </label>
      <label>
        Repayment Period (Months):
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          placeholder="Enter number of months"
        />
      </label>
      <button onClick={handleCalculate}>Calculate</button>

      {monthlyPayment && totalPayable && (
        <div className="result">
          <h3>Results</h3>
          <p>
            Monthly Payment: <strong>${monthlyPayment}</strong>
          </p>
          <p>
            Total Payable: <strong>${totalPayable}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default InterestCalculator;
