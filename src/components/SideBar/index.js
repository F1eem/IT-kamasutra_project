import React from "react";
import Friend from "./Friend";
import { Wrapper } from "./units";
import { connect } from "react-redux";

const SideBar = ({ sideBar }) => {
  const elementFriend = sideBar.friendName.map(({ id, name, key }) => (
    <Friend {...{ id, name, key }} />
  ));

  return (
    <div>
      <h3>Friends</h3>
      <Wrapper>{elementFriend}</Wrapper>
    </div>
  );
};

let mapStateToProps = ({ sideBar }) => ({ sideBar });

export default connect(mapStateToProps)(SideBar);
