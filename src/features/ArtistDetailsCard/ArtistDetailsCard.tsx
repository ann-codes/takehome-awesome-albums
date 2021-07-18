/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { ParentalAdvisoryImg } from "../../components/ParentalAdvisoryImg/ParentalAdvisoryImg";
import { adjustImgSize } from "../../shared/utils";

import "./ArtistDetailsCard.css"

// Not sure why ArtistPageAlbumType is not working as type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArtistDetailsCard = ({ item }: any) => {
  const resizedImage = adjustImgSize(item.artworkUrl100, "100", "480");
  const fixedDate = new Date(item.releaseDate);

  return (
    <div className="pure-g artist-page-card">
      <div className="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-3 text-align-center ">
        <img src={resizedImage} />
      </div>
      <div className="pure-u-1-1 pure-u-md-1-2 pure-u-lg-2-3 artist-page-content">
        <h4 className="title is-4">
          {item.collectionName}{" "}
          {item.collectionExplicitness === "explicit" && (
            <ParentalAdvisoryImg />
          )}
        </h4>
        <p>${item.collectionPrice}</p>
        <p>{item.primaryGenreName}</p>
        <p>Tracks: {item.trackCount}</p>
        <p>Date Released: {fixedDate.toLocaleDateString()}</p>
        <p className="marg-bot-1">{item.copyright}</p>
        <ReactAudioPlayer
          src="rickrolled.mp3"
          className="audio-player"
          controls
        />
      </div>
    </div>
  );
};
