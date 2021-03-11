import React from "react";
import { NavLinkButton, WrapperElemMenu, WrapperMenu } from "./units";
import Sidebar from "../../SideBar";

const Menu = () => {
  return (
    <WrapperMenu>
      <WrapperElemMenu>
        <NavLinkButton to="/profile">Profile</NavLinkButton>
        <NavLinkButton to="/dialogs">Dialogs</NavLinkButton>
        <NavLinkButton to="/gallery">Gallery</NavLinkButton>
        <NavLinkButton to="/settings">Settings</NavLinkButton>
        <NavLinkButton to="/news">News</NavLinkButton>
        <NavLinkButton to="/users">Users</NavLinkButton>
        <NavLinkButton to="/table">Table</NavLinkButton>
      </WrapperElemMenu>
      <Sidebar />
    </WrapperMenu>
  );
};

export default Menu;
