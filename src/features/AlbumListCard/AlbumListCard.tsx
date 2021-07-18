import React from "react";
import { Link } from "react-router-dom";
import { adjustImgSize } from "../../shared/utils";
import { AlbumListCardProps } from "../AlbumList/types";

import "./AlbumListCard.css";

export const AlbumListCard = ({
  album,
  getArtistID,
}: AlbumListCardProps) => {
  const resizedImage = adjustImgSize(album["im:image"][2].label, "170", "380");



  const content = (
    <>
      <div className="overflow-hidden">
        <img className="pure-img album-card-img card-grow" src={resizedImage} />
      </div>
      <div className="album-card-text">
        <p className="title is-5">{album["im:name"].label}</p>
        <p className="subtitle is-6">{album["im:artist"].label}</p>
      </div>
    </>
  );

  return (
    <div className="pure-u-1-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4">
      {getArtistID ? (
        <Link
          to={`/takehome-awesome-albums/artist?id=${getArtistID}+${album.id.attributes["im:id"]}`}
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};
