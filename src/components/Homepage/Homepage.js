import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/Middle";
import "./major.css";
const Homepage = () => {
  return (
    <div className="bg-[#E9EBEE] w-screen">
      <section className="w-[80%] mx-auto major">
        <div className="left p-5">
          <Left></Left>
        </div>
        <div className="middle">
          <Middle></Middle>
        </div>
        <div className="right p-5">
          <Left></Left>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
