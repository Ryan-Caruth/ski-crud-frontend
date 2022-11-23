import React from "react";
import mountains from "../../assets/marius-neugebauer-gMigZZOqu7Y-unsplash.jpg";
import './homePage.css'

const HomePage = () => {
  return (
    <div className="container">
      <div className="season-mode">
        <h1>Winter</h1>
        <hr id="season_mode_seperator"/>
        <h1>Summer</h1>
      </div>
      <img className="mountain-image" src={mountains} alt="view of mountains" />
    </div>
  );
};

export default HomePage;
