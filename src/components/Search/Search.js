import React from "react";

const Search = () => {
  return (
    <div>
      <div class="w-[100%]">
        <div>
          <input
            type="search"
            class="
        form-control
        block
        w-[450px]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-[#F0F0F0] bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleSearch"
            placeholder="Create a new post"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
