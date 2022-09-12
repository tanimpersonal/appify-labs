import React from "react";
import image from "../../assets/images/beach.jpg";
import CommentBox from "../CommentBox/CommentBox";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";
const PostSix = () => {
  return (
    <div className="p-1 bg-white my-5 rounded-md">
      <NamePlate></NamePlate>
      <div className="body px-5">
        <img src={image} alt="" />
        <Like></Like>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default PostSix;
