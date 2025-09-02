import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import Balance from "./pages/Balance";
import ChangePin from "./pages/ChangePin";
import Deposit from "./pages/Deposit";
import Home from "./pages/Home";
import Pin from "./pages/Pin";
import Transaction from "./pages/Transaction";
import Withdraw from "./pages/Withdraw";

export default function App() {
  const [pin, setPin] = useState("1234");
  const [balance, setBalance] = useState(10000);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/enter-pin"
          element={
            <Pin correctPin={pin} setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Transaction isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/balance"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Balance balance={balance} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/withdraw"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Withdraw balance={balance} setBalance={setBalance} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Deposit balance={balance} setBalance={setBalance} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-pin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ChangePin pin={pin} setPin={setPin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
