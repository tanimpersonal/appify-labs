import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/Middle";

const Homepage = () => {
  return (
    <div className="bg-[#E9EBEE] w-screen">
      <section className="w-[80%] mx-auto grid grid-cols-3">
        <div className="left p-5">
          <Left></Left>
        </div>
        <div className="middle">
          <Middle></Middle>
        </div>
        <div className="right"></div>
      </section>
    </div>
  );
};

export default Homepage;
