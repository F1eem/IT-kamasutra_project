import React from "react";
import Menu from "../Menu";
import { WrapperContent } from "./units";
import { Route } from "react-router-dom";
import { Settings } from "./Settings";
import { News } from "./News";
import Dialogs from "./Dialogs/index";
import Gallery from "./Gallery/index";
import Users from "./Users/index";
import Profile from "./Profile/index";
import Login from "./Login";

const Content = () => {
  return (
    <WrapperContent>
      <Menu />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/profile/:userId?" render={() => <Profile />} />
      <Route path="/gallery" render={() => <Gallery />} />
      <Route path="/users" render={() => <Users />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/news" render={() => <News />} />
    </WrapperContent>
  );
};

export { Content };
