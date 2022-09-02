import React from "react";
import CommentBox from "../CommentBox/CommentBox";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";

const PostSeven = () => {
  return (
    <div className="p-1 bg-white my-5 rounded-md">
      <NamePlate></NamePlate>
      <div className="body bg-gradient-to-tr from-[#F60912] to-[#0400FA] h-96 text-center leading-[384px] w-full text-3xl">
        <p>Click your home icon to refresh feed</p>
      </div>
      <div className="body-2 p-5">
        <Like></Like>
        <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default PostSeven;
