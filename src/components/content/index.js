import React from "react";
import { Menu } from "../menu";
import { WrapperContent } from "./units";
import { Route } from "react-router-dom";
import { Settings } from "./settings";
import { News } from "./news";
import Dialogs from "./Dialogs/index";
import Gallery from "./Gallery/index";
import Users from "./users/index";
import MainScreenContainer from "./mainscreen/index";
import Login from "./Login";

const Content = () => {
  return (
    <WrapperContent>
      <Menu />
      <Route path="/dialogs" render={() => <Dialogs />} />
      <Route path="/profile/:userId?" render={() => <MainScreenContainer />} />
      <Route path="/gallery" render={() => <Gallery />} />
      <Route path="/users" render={() => <Users />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/news" render={() => <News />} />
    </WrapperContent>
  );
};

export { Content };
