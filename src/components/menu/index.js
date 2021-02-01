import React from "react";
import { NavLink } from "react-router-dom";
import { WrapperMenu, WrapperMenuButton } from "./units";
import { SidebarContainer } from "../SideBar/container";

const Menu = () => {
  return (
    <WrapperMenu>
      <div>
        <WrapperMenuButton>
          <NavLink to="/profile">Profile</NavLink>
        </WrapperMenuButton>
        <WrapperMenuButton>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </WrapperMenuButton>
        <WrapperMenuButton>
          <NavLink to="/gallery">Gallery</NavLink>
        </WrapperMenuButton>
        <WrapperMenuButton>
          <NavLink to="/settings">Settings</NavLink>
        </WrapperMenuButton>
        <WrapperMenuButton>
          <NavLink to="/news">News</NavLink>
        </WrapperMenuButton>
        <WrapperMenuButton>
          <NavLink to="/users">Users</NavLink>
        </WrapperMenuButton>
      </div>
      <SidebarContainer />
    </WrapperMenu>
  );
};

export { Menu };
