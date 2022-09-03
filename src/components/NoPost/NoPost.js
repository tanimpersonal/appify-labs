import React from "react";

const NoPost = () => {
  return (
    <div className="bg-white rounded-md p-1">
      <div className="body p-5 text-center">
        <h1 className="text-3xl font-bold">No more posts found</h1>
        <p className="py-5">Keep checking later</p>
      </div>
    </div>
  );
};

export default NoPost;
