import {
  faChevronDown,
  faFlag,
  faPaperclip,
  faPen,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dropdown = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="
          dropdown-toggle
         text-lg
          text-black
          font-medium
          
          leading-tight
          uppercase
          rounded
          
         
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></FontAwesomeIcon>
            <ul
              className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          px-2
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="flex items-center">
                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
                <a
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                  href="/"
                >
                  Save Post
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPen}> </FontAwesomeIcon>
                <a
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                  href="/"
                >
                  Another action
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                <a
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                  href="/"
                >
                  Report Post
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                <a
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                  href="/"
                >
                  Delete Post
                </a>
              </li>
              <li>
                <div className="spacer h-[1px] bg-[#E8EAEC]"></div>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                <a
                  className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                  href="/"
                >
                  Open Post in a new Tab
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
