import React from "react";
import Post from "./Post";
import { WrapperMyPosts } from "./units";
import { connect } from "react-redux";
import { addNewPost, updateNewPostText } from "redux/profileReducer";

const MyPosts = ({ profilePage, addNewPost, updateNewPostText }) => {
  const postsElements = profilePage.postsData.map(
    ({ id, text, link, number }, key) => (
      <Post {...{ key }} {...{ id, text, link, number }} />
    )
  );

  return (
    <WrapperMyPosts>
      <h3>My post</h3>
      <textarea
        value={profilePage.updateNewText}
        onChange={(e) => updateNewPostText(e.target.value)}
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
  updateNewPostText,
})(MyPosts);
