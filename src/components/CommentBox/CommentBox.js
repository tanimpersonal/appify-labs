import {
  faCat,
  faPaperclip,
  faSmile,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CommentInput from "../CommentInput/CommentInput";

const CommentBox = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="user">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-2xl"
        ></FontAwesomeIcon>
      </div>
      <div className="inputs flex items-center gap-2">
        <div className="smile">
          <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
        </div>
        <div className="attachment">
          <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
        </div>
        <div className="gif">
          <FontAwesomeIcon icon={faCat}></FontAwesomeIcon>
        </div>
        <div className="input my-5">
          <CommentInput></CommentInput>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
