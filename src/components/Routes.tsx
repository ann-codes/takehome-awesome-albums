import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { ArtistPage } from "../pages/ArtistPage";

export const Routes = () => (
  <div className="container">
    <Switch>
      <Route path="/takehome-awesome-albums" exact={true}>
        <Home />
      </Route>
      <Route path="/takehome-awesome-albums/artist" exact={true}>
        <ArtistPage />
      </Route>
    </Switch>
  </div>
);
