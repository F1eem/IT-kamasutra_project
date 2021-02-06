import React from "react";
import { NavLink } from "react-router-dom";
import { DialogAvatar, Wrapper } from "./units";

const DialogItem = ({ id, name, avatar }) => {
  return (
    <Wrapper>
      <DialogAvatar src={avatar} />
      <NavLink to={id}> {name}</NavLink>
    </Wrapper>
  );
};

export default DialogItem;
