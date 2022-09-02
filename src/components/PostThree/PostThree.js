import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "../../assets/images/nature-1.jpg";
import CommentBox from "../CommentBox/CommentBox";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";
const PostThree = () => {
  return (
    <div className="p-1 bg-white my-5 rounded-md">
      <NamePlate></NamePlate>
      <div className="image p-5">
        <img src={image} alt="" />
      </div>
      <div className="like px-5">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-[#079CF8]"
        ></FontAwesomeIcon>
      </div>
      <div className="like-comment px-5">
        <Like></Like>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default PostThree;
