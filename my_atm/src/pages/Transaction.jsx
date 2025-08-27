import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TransactionMenu({ isAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/enter-pin");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="menu-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>My ATM</h1>
      <h2>Select Transaction</h2>
      <button onClick={() => navigate("/balance")}>Check Balance</button>
      <button onClick={() => navigate("/withdraw")}>Withdraw Money</button>
      <button onClick={() => navigate("/deposit")}>Deposit Money</button>
      <button onClick={() => navigate("/change-pin")}>Change PIN</button>
      <button onClick={() => navigate("/")}>Exit</button>
    </div>
  );
}
