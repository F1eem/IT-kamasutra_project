import React from "react";
import { Friend } from "./Friend";
import { Wrapper } from "./units";

const SideBar = ({sideBar}) => {
  let elementFriend = sideBar.friendName.map((e) => (
    <Friend key = {e.id} friendName={e.name} />
  ));

  return (
    <div>
      <h3>Friends</h3>
      <Wrapper>{elementFriend}</Wrapper>
    </div>
  );
};

export { SideBar };
