import {
  faBell,
  faMessage,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const NavMenu = () => {
  const firstStyle = {
    height: "15px",
  };
  const secondStyle = {
    height: "25px",
    width: "25px",
  };

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <nav
      className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-[#34465D]
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  navbar navbar-expand-lg navbar-light
  "
    >
      <div className="w-[80%] mx-auto flex flex-wrap items-center justify-between px-6">
        <button
          onClick={handleMenu}
          className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <a
            className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
            href="/"
          >
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              style={firstStyle}
              alt=""
              loading="lazy"
            />
          </a>
        </div>

        {/* search */}
        <div className={`${menu ? "my-5" : "hidden"} lg:flex mr-[100px]`}>
          <div className="xl:w-96">
            <input
              type="search"
              className="
              rounded-full
        form-control
        block
        w-full
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleSearch"
              placeholder="search"
            />
          </div>
        </div>

        {/* right */}
        <div
          className={`${
            menu ? "flex-col" : "hidden"
          } lg:flex items-center lg:relative gap-4`}
        >
          <div className="static inline lg:relative">
            <a className="text-white mr-4" href="/">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </a>
            <div className="hidden lg:block h-[2px] bg-white absolute w-7 top-9 left-[-4px]"></div>
          </div>
          <a className="text-white mr-4" href="/">
            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
          </a>
          <a className="text-white mr-4" href="/">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </a>
          <a className="text-white mr-4" href="/">
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </a>

          <div className="dropdown relative">
            <a
              className="dropdown-toggle flex items-center hidden-arrow"
              href="/"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="image-text flex text-white gap-2 items-center">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="bg-gray-500 p-1 rounded-full"
                ></FontAwesomeIcon>
                <p>Adnan Chowdhury</p>
                <p>
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </p>
              </div>
            </a>
            <ul
              className="
    dropdown-menu
    min-w-max
    absolute
    hidden
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
    left-auto
    right-0
  "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
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
                  Action
                </a>
              </li>
              <li>
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
              <li>
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
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
