import React from "react";
import image from "../../assets/images/ifel.jpg";
import CommentBox from "../CommentBox/CommentBox";
import Like from "../Like/Like";
import NamePlate from "../NamePlate/NamePlate";
const PostFive = () => {
  return (
    <div className="p-1 bg-white my-5 rounded-md">
      <NamePlate></NamePlate>
      <body className="px-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          vero incidunt modi distinctio temporibus fugit eligendi tenetur!
          Temporibus ipsa placeat debitis, aspernatur tenetur consequatur,
          laudantium qui esse dicta fuga voluptatem quaerat impedit enim aperiam
          dolorem, laborum sunt. Et, quas rerum!
        </p>
        <img className="my-2" src={image} alt="" />
        <Like></Like>
        <CommentBox></CommentBox>
      </body>
    </div>
  );
};

export default PostFive;
