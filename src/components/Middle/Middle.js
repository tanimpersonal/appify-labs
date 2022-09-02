import React from "react";
import Post from "../Post/Post";
import PostOne from "../PostOne/PostOne";
import PublicPost from "../PublicPost/PublicPost";
import Story from "../Story/Story";

const Middle = () => {
  return (
    <div>
      <Story></Story>
      <Post></Post>
      <PublicPost></PublicPost>
      <div className="posts">
        <PostOne></PostOne>
      </div>
    </div>
  );
};

export default Middle;
