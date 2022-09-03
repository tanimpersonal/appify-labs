import React from "react";
import NoPost from "../NoPost/NoPost";
import Post from "../Post/Post";
import PostFive from "../PostFive/PostFive";
import PostFour from "../PostFour/PostFour";
import PostOne from "../PostOne/PostOne";
import PostSeven from "../PostSeven/PostSeven";
import PostSix from "../PostSix/PostSix";
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
        <PostFive></PostFive>
        <PostSix></PostSix>
        <PostSeven></PostSeven>
        <NoPost></NoPost>
      </div>
    </div>
  );
};

export default Middle;
