import { faCircleXmark, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FirstForm = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <div className="form-check flex items-center gap-10 py-2">
            <div className="checkbox-label flex items-center gap-2">
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked
              />
              <label
                className="form-check-label inline-block bg-[#F0F2F5] text-gray-800 w-[350px] px-2 border-[1px] rounded-md border-[#E0DFDF]"
                for="flexCheckDefault"
              >
                <h1>Added By You</h1>
                <p className="text-lg">Football</p>
              </label>
            </div>
            <div className="vote text-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-2xl"
              ></FontAwesomeIcon>
              <p className="text-xs whitespace-nowrap">1 Vote</p>
            </div>
            <div className="cross">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-[#DCDEE1] text-lg"
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="form-check flex items-center justify-between">
            <div className="checkbox-label flex items-center gap-2">
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                type="checkbox"
                value=""
                id="cricket"
              />
              <label
                className="form-check-label inline-block bg-[#F0F2F5] text-gray-800 w-[350px] px-2 border-[1px] rounded-md border-[#E0DFDF]"
                for="cricket"
              >
                <h1>Added By You</h1>
                <p className="text-lg">Cricket</p>
              </label>
            </div>
            <div className="cross">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-[#DCDEE1] text-lg"
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="form-check flex items-center justify-between py-2">
            <div className="checkbox-label flex items-center gap-2">
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                type="checkbox"
                value=""
                id="badminton"
              />
              <label
                className="form-check-label inline-block bg-[#F0F2F5] text-gray-800 w-[350px] px-2 border-[1px] rounded-md border-[#E0DFDF]"
                for="badminton"
              >
                <h1>Added By You</h1>
                <p className="text-lg">Badminton</p>
              </label>
            </div>
            <div className="cross">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-[#DCDEE1] text-lg"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
