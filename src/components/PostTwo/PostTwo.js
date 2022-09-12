import React from "react";
import beach from "../../assets/images/beach.jpg";
import ifel from "../../assets/images/ifel.jpg";
import nature1 from "../../assets/images/nature-1.jpg";
import nature2 from "../../assets/images/nature-2.jpg";
import CommentBox from "../CommentBox/CommentBox";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";
import "./PostTwo.css";
const PostTwo = () => {
  return (
    <div className="my-5 p-1 bg-white rounded-md">
      <NamePlate></NamePlate>
      <div className="body px-5">
        <p className="my-2">Have a good day</p>
        <div className="pictures grid grid-cols-1 gap-2">
          <div className="first-row grid grid-cols-2 gap-2">
            <img src={ifel} alt="" />
            <img src={beach} alt="" />
          </div>
          <div className="second-row grid grid-cols-3 gap-2">
            <img src={nature1} alt="" />
            <img src={nature2} alt="" />
            <div className="third relative w-[100%]">
              <p className="over absolute text-lg top-[45%] left-[45%] m-auto text-white">
                1+
              </p>
            </div>
          </div>
        </div>
        <Like></Like>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default PostTwo;
