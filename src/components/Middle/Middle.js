import React from "react";
import Post from "../Post/Post";
import PostFour from "../PostFour/PostFour";
import PostOne from "../PostOne/PostOne";
import PostThree from "../PostThree/PostThree";
import PostTwo from "../PostTwo/PostTwo";
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

        <PostTwo></PostTwo>
        <PostThree></PostThree>
        <PostFour></PostFour>
      </div>
    </div>
  );
};

export default Middle;
