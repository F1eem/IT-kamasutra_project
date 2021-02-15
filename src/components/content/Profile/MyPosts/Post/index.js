import React from "react";
import LikeButton from "components/common/LikeButton";
import LikeCounter from "components/common/LikeCounter";
import { WrapperPost, PostImg } from "./units";

const Post = ({ link, text, number }) => {
  return (
    <>
      <WrapperPost>
        <PostImg src={link} alt="Нет аватара" />
        <div>{text}</div>
      </WrapperPost>
      <LikeButton />
      <LikeCounter {...{ number }} />
    </>
  );
};
export default Post;
