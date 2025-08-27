import { useState } from "react";
import { Link } from "react-router-dom";

export default function Withdraw({ balance, setBalance }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = () => {
    const withdrawAmount = parseInt(amount);

    if (!withdrawAmount || withdrawAmount <= 0) {
      setMessage("Enter a valid amount");
    } else if (withdrawAmount % 100 !== 0) {
      setMessage("Only multiples of 100 are available");
    } else if (withdrawAmount > balance) {
      setMessage("Insufficient Balance");
    } else {
      setBalance(balance - withdrawAmount);
      setMessage(
        `Withdrawn ₹${withdrawAmount}. New Balance: ₹${
          balance - withdrawAmount
        }`
      );
    }

    setAmount("");
  };

  return (
    <div
      className="withdraw-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>My ATM</h1>
      <h2>Withdraw Amount</h2>
      <input
        type="number"
        value={amount}
        readOnly
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      {message && (
        <p style={{ color: message.includes("Withdrawn") ? "green" : "red" }}>
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
      <button className="last" onClick={handleWithdraw}>
        Withdraw
      </button>
      <Link to="/menu">
        <button className="last">Back to Menu</button>
      </Link>
    </div>
  );
}
