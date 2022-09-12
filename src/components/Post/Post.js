import {
  faCamera,
  faCircleHalfStroke,
  faSmile,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Search from "../Search/Search";
import "./post.css";
const Post = () => {
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="user-post flex items-center gap-5">
        <div className="user-image">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-3xl"
          ></FontAwesomeIcon>
        </div>
        <div className="create-post">
          <Search></Search>
        </div>
      </div>
      <div className="spacer lg:w-full h-[2px] my-5 bg-[#F3F3F3] rounded-full"></div>
      <div className="end flex gap-2 lg:gap-20 justify-center">
        <div className="background">
          <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>
          <p>Background</p>
        </div>
        <div className="background">
          <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
          <p>Photo/Video</p>
        </div>
        <div className="background">
          <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
          <p>Feelings</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
