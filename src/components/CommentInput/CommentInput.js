import { faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CommentInput = () => {
  return (
    <>
      <div className="">
        <div className="xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full">
            <input
              type="search"
              className="form-control rounded-full relative flex-auto min-w-0 border-r-0 block w-full px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
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
    </>
  );
};

export default CommentInput;
