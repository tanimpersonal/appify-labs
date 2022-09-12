import React from "react";
import Left from "../Left/Left";
import Middle from "../Middle/Middle";
import Right from "../Right/Right";
import "./major.css";
const Homepage = () => {
  return (
    <div className="bg-[#E9EBEE] w-screen">
      <section className="w-[90%] lg:w-[80%] mx-auto major">
        <div className="left py-5 lg:p-5">
          <Left></Left>
        </div>
        <div className="middle">
          <Middle></Middle>
        </div>
        <div className="right py-5 lg:p-5">
          <Right></Right>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
