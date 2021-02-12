import React from "react";
import Friend from "./Friend";
import { Wrapper } from "./units";
import { connect } from "react-redux";

const SideBar = ({ sideBar: { friendName } }) => {
  const elementFriend = friendName.map(({ id, name }, key) => (
    <Friend {...{ key }} {...{ id, name }} />
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
