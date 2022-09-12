import { faCirclePlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Middle/middle.css";
const Story = () => {
  return (
    <div className="story flex my-5 gap-5">
      <div className="first w-28 h-40 overflow-hidden rounded-md">
        <div
          className="bg-black rounded-3xl w-[100%] h-[100%] mt-28
          relative"
        >
          <div className="plus absolute left-0 right-0 text-center mt-[-8px]">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="text-[#458AE5] text-3xl  border-black border-2 rounded-full"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <div className="second w-28 h-40 overflow-hidden rounded-md">
        <div className="relative">
          <div className="plus absolute right-2 top-2 text-center">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-[#E3E3E3] text-2xl  border-white border-2 rounded-full"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="adnan mt-32 px-1 text-white text-sm">
          <p>Adn Chowdhury</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
