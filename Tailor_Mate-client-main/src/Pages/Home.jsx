import React from "react";
import Navbar from "../Components/Navbar";
import "../assets/css/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1 className="home-title">Tailor Mate</h1>
        <p
          className="
.home-description"
        >
          Start Collecting your dress measurement in very smart way.
        </p>
      </div>
    </>
  );
};

export default Home;
