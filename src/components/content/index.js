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
import TestTable from "./Table";
import { claimDict } from "api/claimTable";
import { css } from "@emotion/core";
import Claim from "./Table/Claim";
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
        <Route
          exact
          path="/table"
          render={() => (
            <TestTable
              config={claimDict}
              wrapperStyle={css`
                margin-left: 5px;
              `}
            />
          )}
        />
        <Route
          path="/table/:currentClaimId"
          render={() => <Claim config={claimDict} />}
        />
      </WrapperContent>
    </Suspense>
  );
};

export { Content };
