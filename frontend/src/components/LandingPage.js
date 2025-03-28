import React from "react";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import "../styles/LandingPage.css"; // Updated CSS file

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* 3D Spline Background */}
      <Spline
        scene="https://prod.spline.design/2QQH2b61BdsZurn3/scene.splinecode"
        className="spline-scene"
      />

      <div className="overlay">
        <h1>Welcome to Finsight AI</h1>
        <p>Select your role:</p>
        <div className="buttons">
          <button className="btn patient" onClick={() => navigate("/startup/home")}>
            Startup
          </button>
          {/* <button className="btn caretaker" onClick={() => navigate("/caretaker")}>
            Caretaker
          </button> */}
          <button className="btn doctor" onClick={() => navigate("/interviewee")}>
            Investor
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
