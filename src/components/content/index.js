import React, { Suspense } from "react";
import Menu from "../common/Menu";
import { WrapperContent } from "./units";
import { Route } from "react-router-dom";
import { Settings } from "./Settings";
import { News } from "./News";
// import Dialogs from "./Dialogs/index";
import Gallery from "./Gallery/index";
// import Users from "./Users/index";
import Profile from "./Profile/index";
import Login from "./Login";
const Dialogs = React.lazy(() => import("./Dialogs/index"));
const Users = React.lazy(() => import("./Users/index"));

const Content = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
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
    </Suspense>
  );
};

export { Content };
