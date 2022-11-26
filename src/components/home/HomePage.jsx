import React from "react";
import mountains from "../../assets/marius-neugebauer-gMigZZOqu7Y-unsplash.jpg";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="season-mode">
        <h1>Winter</h1>
        <hr id="season_mode_seperator" />
        <h1>Summer</h1>
      </div>
      <div className="image-container">
        <img
          className="mountain-image"
          src={mountains}
          alt="view of mountains"
        />
        <div id="text-container">
          <h2 style={{ color: "White" }}>Ski Crud</h2>
          <hr id="title-text-line" />
        </div>
        <div id="app-description">
          <p style={{ color: "white" }}>
            An application for thrill seekers to track their progress on
            personal challenges
          </p>
        </div>
      </div>
      <div className="buttons">
        <button id="sign-in-button">Sign in</button>
        <button id="register-button">Register</button>
      </div>
    </div>
  );
};

export default HomePage;
