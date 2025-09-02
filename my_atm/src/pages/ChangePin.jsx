import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ChangePin({ pin, setPin }) {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChangePin = () => {
    if (oldPin !== pin) {
      setMessage("Incorrect Old PIN");
    } else if (newPin.length < 4) {
      setMessage("PIN must be at least 4 digits");
    } else if (newPin !== confirmPin) {
      setMessage("New PINs do not match");
    } else {
      setPin(newPin);
      setMessage("PIN successfully changed!");
      setTimeout(() => {
        navigate("/menu");
      }, 1500);
    }
    setOldPin("");
    setNewPin("");
    setConfirmPin("");
  };

  return (
    <div
      className="change-pin-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>My ATM</h1>
      <h2>Change PIN</h2>
      <input
        type="password"
        value={oldPin}
        onChange={(e) => setOldPin(e.target.value)}
        placeholder="Enter Old PIN"
      />
      <br />
      <input
        type="password"
        value={newPin}
        onChange={(e) => setNewPin(e.target.value)}
        placeholder="Enter New PIN"
      />
      <br />
      <input
        type="password"
        value={confirmPin}
        onChange={(e) => setConfirmPin(e.target.value)}
        placeholder="Confirm New PIN"
      />
      <br />
      {message && (
        <p style={{ color: message.includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}
      <button className="last" onClick={handleChangePin}>
        Change PIN
      </button>
      <Link to="/menu">
        <button className="last">Back to Menu</button>
      </Link>
    </div>
  );
}
