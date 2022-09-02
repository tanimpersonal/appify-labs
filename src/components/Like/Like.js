import {
  faComment,
  faHeart,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Like = () => {
  return (
    <div>
      <div className="icons flex justify-between">
        <div className="sub-icons flex">
          <p>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-[#079CF8]"
            ></FontAwesomeIcon>
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#E81B3D]"
              icon={faHeart}
            ></FontAwesomeIcon>
          </p>
        </div>
        <p className="text-right">1 Comment</p>
      </div>
      <div className="like-comment-share flex justify-evenly bg-[#FAFAFA] py-5 rounded-md">
        <div className="like flex items-center gap-2">
          <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
          <p>Like</p>
        </div>
        <div className="comment flex items-center gap-2">
          <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
          <p>Comment</p>
        </div>
        <div className="share flex items-center gap-2">
          <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Like;
