import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Right = () => {
  return (
    <div>
      <div className="p-5 bg-white rounded-md">
        <div className="first-right my-2">
          <h1 className="text-lg font-bold">You Might Like</h1>
        </div>
        <div className="spacer h-[1px] my-5 bg-[#F7F7F7]"></div>
        <div className="user flex items-center gap-5">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-3xl"
          ></FontAwesomeIcon>
          <div className="user-name">
            <p className="text-lg">sadfa</p>
            <p>sfdasd</p>
          </div>
        </div>
        <div className="button my-2 flex justify-center gap-5">
          <button className="py-1 px-4 bg-white border-[1px] rounded-md text-black">
            Ignore
          </button>
          <button className="py-1 px-4 bg-red-600 border-[1px] rounded-md text-white">
            Follow
          </button>
        </div>
      </div>
      <div className="friends p-5 bg-white rounded-md my-5">
        <div className="heading my-2">
          <h1 className="text-lg font-bold">Your Friends</h1>
        </div>
        <div className="searc">
          <input
            type="text"
            className="border-[1px] rounded-full px-2 py-1"
            placeholder="search"
          />
        </div>
        <div className="user-two">
          <div className="first-user my-4 flex gap-2 whitespace-nowrap items-center">
            <FontAwesomeIcon
              className="text-3xl"
              icon={faUserCircle}
            ></FontAwesomeIcon>
            <p>Admin</p>
          </div>
          <div className="second-user flex gap-2 whitespace-nowrap items-center">
            <FontAwesomeIcon
              className="text-3xl"
              icon={faUserCircle}
            ></FontAwesomeIcon>
            <p>Kazi Musharrof Shishir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
