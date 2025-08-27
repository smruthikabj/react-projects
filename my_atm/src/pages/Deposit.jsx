import { useState } from "react";
import { Link } from "react-router-dom";

export default function Deposit({ balance, setBalance }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDeposit = () => {
    const depositAmount = parseInt(amount);

    if (!depositAmount || depositAmount <= 0) {
      setMessage("Enter a valid amount");
    } else if (depositAmount % 100 !== 0) {
      setMessage("Only multiples of 100 are allowed");
    } else {
      setBalance(balance + depositAmount);
      setMessage(
        `Deposited ₹${depositAmount}. New Balance: ₹${balance + depositAmount}`
      );
    }

    setAmount("");
  };

  return (
    <div
      className="deposit-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>My ATM</h1>
      <h2>Deposit Amount</h2>
      <input
        type="number"
        value={amount}
        readOnly
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      {message && (
        <p style={{ color: message.includes("Deposited") ? "green" : "red" }}>
          {message}
        </p>
      )}
      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => setAmount((prevAmount) => prevAmount + num)}
          >
            {num}
          </button>
        ))}
        <button className="clear" onClick={() => setAmount("")}>
          Clear
        </button>
      </div>
      <button className="last" onClick={handleDeposit}>
        Deposit
      </button>
      <Link to="/menu">
        <button className="last">Back to Menu</button>
      </Link>
    </div>
  );
}
