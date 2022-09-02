import {
  faCat,
  faEllipsis,
  faPaperclip,
  faPaperPlane,
  faSearch,
  faSmile,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import crying from "../../assets/images/crying-meme.jpg";
import CommentBox from "../CommentBox/CommentBox";
const Comment = () => {
  return (
    <div>
      <CommentBox></CommentBox>
      <div className="comment-box flex my-5 gap-5">
        <div className="user">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl"
          ></FontAwesomeIcon>
        </div>
        <div className="flex items-center gap-5">
          <div className="picture bg-[#F6F6F6] p-2 rounded-md whitespace-nowrap w-42">
            <div className="text">
              <p>Adnan Chowdhury</p>
              <img src={crying} alt="" className="w-40" />
            </div>
          </div>
          <div className="three-dot">
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="like-reply flex px-12 gap-5 mt-[-12px]">
        <p>Like</p>
        <p>Reply</p>
        <p>54 Minutes Ago</p>
      </div>
      <div className="second-comment flex px-12 gap-2 my-5">
        <div className="icon">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-2xl"
          ></FontAwesomeIcon>
        </div>
        <div className="text-three flex items-center gap-2">
          <div
            className="text
           bg-[#F6F6F6] p-2 rounded-2xl"
          >
            <p>Adnan Chowdhury</p>
            <p>Hlo</p>
          </div>
          <div className="threedot">
            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="like px-20 mt-[-10px] font-bold">
        <p>Like</p>
      </div>
      <div className="comment px-12">
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
              <div className="">
                <div className="xl:w-[335px]">
                  <div className="input-group relative flex flex-wrap items-stretch w-full">
                    <input
                      type="search"
                      className="form-control rounded-full relative flex-auto min-w-0 border-r-0 block w-full px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Comment"
                      aria-label="Search"
                      aria-describedby="button-addon3"
                    />
                    <button
                      icon={faSearch}
                      className="btn inline-block px-6 py-2 border-[1px] border-l-0 border-gray-300 text-black text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      type="button"
                      id="button-addon3"
                    >
                      <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
