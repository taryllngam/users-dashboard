import React from "react";
import { useNavigate } from "react-router-dom";
import "../Welcome-page/Welcome.css";

export default function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/sign`);
  };
  return (
    <div className="welcome">
      <div className="welcome1">
        <h1>👋 WELCOME </h1>
        <p>SIGNUP AND BEGIN YOUR JOURNEY WITH US</p>
          <button className="btn" onClick={handleClick} >SIGNUP</button>

      </div>
    </div>
  );
}
