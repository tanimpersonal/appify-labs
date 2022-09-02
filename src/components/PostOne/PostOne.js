import React from "react";
import Comment from "../Comment/Comment";
import FirstForm from "../FirstForm/FirstForm";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";

const PostOne = () => {
  return (
    <div className="bg-white">
      <NamePlate></NamePlate>
      <div className="body px-5 py-1">
        <p>Your Favorite Game</p>
        <div className="my-form">
          <FirstForm></FirstForm>
        </div>
        <div className="like">
          <Like></Like>
        </div>
        <div className="comment">
          <Comment></Comment>
        </div>
      </div>
    </div>
  );
};

export default PostOne;
