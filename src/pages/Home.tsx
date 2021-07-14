import React from "react";
import { AlbumList } from "../features/AlbumList/AlbumList";

export const Home = () => {
  return (
    <div>
      <h2 className="title is-3">Top 100 iTunes</h2>
      <AlbumList />
    </div>
  );
};
