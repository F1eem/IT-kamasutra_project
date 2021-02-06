import React from "react";
import Post from "./Post";
import { WrapperMyPosts } from "./units";
import { connect } from "react-redux";
import { addNewPost, updateNewText } from "redux/profileReducer";

const MyPosts = ({ profilePage, addNewPost, updateNewText }) => {
  const postsElements = profilePage.postsData.map(
    ({ id, text, link, number, key }) => (
      <Post key={key} id={id} text={text} link={link} number={number} />
    )
  );

  return (
    <WrapperMyPosts>
      <h3>My post</h3>
      <textarea
        value={profilePage.updateNewText}
        onChange={(e) => updateNewText(e.target.value)}
      />
      <div>
        <button onClick={addNewPost}>Add post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </WrapperMyPosts>
  );
};

const mapStateToProps = ({ profilePage }) => ({ profilePage });

export default connect(mapStateToProps, {
  addNewPost,
  updateNewText,
})(MyPosts);
