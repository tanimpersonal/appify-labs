import { faGlobe, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const NamePlate = () => {
  return (
    <div className="flex justify-between bg-white p-5">
      <div className="image-text flex items-center gap-5">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-3xl"
        ></FontAwesomeIcon>
        <div className="name">
          <h3>Adnan Chowdhury</h3>
          <div className="globe flex items-center gap-2">
            <p>1 hours ago</p>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <Dropdown></Dropdown>
      </div>
    </div>
  );
};

export default NamePlate;
