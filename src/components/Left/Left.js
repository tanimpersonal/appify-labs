// import { faSave, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendar,
  faPager,
  faSave,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import noUser from "../../assets/images/no-user.jpg";
import store from "../../assets/images/store.png";
const Left = () => {
  return (
    <div>
      <div className="explore bg-white rounded-md p-5">
        <h3>Explore</h3>
        <div className="bullets">
          <p className="my-2">
            <FontAwesomeIcon
              icon={faSave}
              className="text-[#888888] mr-2"
            ></FontAwesomeIcon>
            Saved Posts
          </p>
          <p className="my-2">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#888888] mr-2"
            ></FontAwesomeIcon>
            People
          </p>
          <p className="my-2">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-[#888888] mr-2 text-[13px]"
            ></FontAwesomeIcon>
            Groups
          </p>
          <p className="my-2">
            <FontAwesomeIcon
              icon={faPager}
              className="text-[#888888] mr-2"
            ></FontAwesomeIcon>
            Pages
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-[#888888] mr-2"
            ></FontAwesomeIcon>
            Events
          </p>
        </div>
      </div>
      {/* app store */}
      <div className="app bg-white my-5 p-5 rounded-md">
        <h1>Download App</h1>
        <div className="image w-full">
          <img src={store} alt="" />
        </div>
      </div>
      {/* suggested */}
      <div className="app bg-white my-5 p-5 rounded-md">
        <h1>Suggested People</h1>
        <div className="profile flex items-center whitespace-nowrap mt-5">
          <img src={noUser} alt="" className="rounded-full w-8 mr-2" />
          <p>Sadek Hossain</p>
          <button className=" lg:flex-grow lg:py-[0.7px] rounded-md ml-24 lg:ml-2 border-[1px] lg:px-1 px-2 border-gray-400">
            ADD+
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
