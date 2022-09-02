import {
  faComment,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Like = () => {
  return (
    <div>
      <p className="text-right py-2">1 Comment</p>
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
