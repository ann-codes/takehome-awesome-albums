import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { ArtistPage } from "../pages/ArtistPage";

export const Routes = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/artist" exact={true}>
        <ArtistPage />
      </Route>
    </Switch>
  </div>
);
