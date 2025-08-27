import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>Welcome to My ATM</h1>
      <Link to="/menu">
        <button>Start Transaction</button>
      </Link>
      <br />
      <br />
      <br />
      <div className="welcome">
        <h1>Welcome</h1>
      </div>
    </div>
  );
}
