import React from "react";
import { Route, Switch } from "react-router-dom";
import { AlbumList } from "../features/AlbumList/AlbumList";
import { ArtistDetails } from "../features/ArtistDetails/ArtistDetails";

export const Routes = () => (
  <div className="container">
    <Switch>
      <Route path="/takehome-awesome-albums" exact={true}>
        <AlbumList />
      </Route>
      <Route path="/takehome-awesome-albums/artist" exact={true}>
        <ArtistDetails />
      </Route>
    </Switch>
  </div>
);
