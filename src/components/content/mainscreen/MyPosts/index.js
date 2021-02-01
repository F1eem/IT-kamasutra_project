import React from "react";
import { Post } from "./Post";
import { WrapperMyPosts } from "./units";
import {connect} from "react-redux";
import {addNewPost, updateNewText} from "../../../../redux/profileReducer";

const MyPosts = ({ profilePage, addNewPost, updateNewText }) => {
  let postsElements = profilePage.postsData.map((p) => (
    <Post key={p.id} text={p.text} link={p.link} number={p.number} />
  ));

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    updateNewText(text);
  };

  return (
    <WrapperMyPosts>
      <h3>My post</h3>
      <textarea
        value={profilePage.updateNewText}
        onChange={onNewMessageChange}
      />
      <div>
        <button onClick={addNewPost}>Add post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </WrapperMyPosts>
  );
};

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};

export default connect(mapStateToProps, {
    addNewPost,
    updateNewText,
})(MyPosts);
