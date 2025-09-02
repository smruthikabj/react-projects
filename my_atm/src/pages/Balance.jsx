import { Link } from "react-router-dom";

export default function Balance({ balance }) {
  return (
    <div
      className="balance-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>My ATM</h1>
      <h2>Your Balance: ₹{balance}</h2>
      <Link to="/menu">
        <button>Back to Menu</button>
      </Link>
    </div>
  );
}
