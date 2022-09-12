import React from "react";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";

const PostFour = () => {
  return (
    <div className="p-1 bg-white my-5 rounded-md">
      <NamePlate></NamePlate>
      <div className="body p-5">
        <p>Hello Everyone</p>
        <div className="like-comment pt-5">
          <Like></Like>
        </div>
      </div>
    </div>
  );
};

export default PostFour;
