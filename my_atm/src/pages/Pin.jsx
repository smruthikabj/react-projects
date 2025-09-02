import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Pin({ correctPin, setIsAuthenticated }) {
  const [enteredPin, setEnteredPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (enteredPin === correctPin) {
      setIsAuthenticated(true);
      navigate("/menu");
    } else {
      setError("Incorrect PIN. Please try again.");
    }
    setEnteredPin("");
  };

  return (
    <div
      className="pin-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>My ATM</h1>
      <h2> Enter Your PIN</h2>
      <input
        type="password"
        value={enteredPin}
        onChange={(e) => setEnteredPin(e.target.value)}
        placeholder="Enter PIN"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
