import React from "react";
import { LikeButton } from "../../../../LikeButton";
import { LikeCounter } from "../../../../LikeCounter";
import { WrapperPost, PostImg } from "./units";

const Post = ({ link, text, number }) => {
  return (
    <>
      <WrapperPost>
        <PostImg src={link} alt="Нет аватара" />
        <div>{text}</div>
      </WrapperPost>
      <LikeButton />
      <LikeCounter number={number} />
    </>
  );
};
export { Post };
