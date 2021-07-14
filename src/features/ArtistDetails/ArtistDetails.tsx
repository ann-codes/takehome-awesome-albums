/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import ArtistService from "../../services/ArtistService";
import { ArtistPageAlbumType, ArtistType } from "../../shared/types";
import { useQuery } from "../../shared/utilities";

export const ArtistDetails = () => {
  const [artist, setArtist] = useState<ArtistType>();
  const [albums, setAlbums] = useState<ArtistPageAlbumType>();
  const query = useQuery();
  const ids = query.get("id");
  const artistID = ids?.split(" ")[0];
  const albumID = ids?.split(" ")[1];

  const fetchArtist = () => {
    ArtistService.getArtistAndAlbums(artistID)
      .then((res) => {
        const data = res.data.results;
        // strange return data, separate data to different variables
        const getAlbums = data.filter(
          (item: { wrapperType: string }) => item.wrapperType === "collection"
        );
        const getArtist = data.find(
          (item: { wrapperType: string }) => item.wrapperType === "artist"
        );
        setArtist(getArtist);
        setAlbums(getAlbums);
      })
      .catch((e) => {
        console.error(`Error fetching data: ${e}`);
      });
  };

  useEffect(fetchArtist, [artistID]);

  console.log(albums); //////// ==========

  const mainAlbum = albums?.map((item: ArtistPageAlbumType) => {
    const imageToResize = item.artworkUrl100;
    const resizedImage: string = imageToResize.replace(/100x100/i, "450x450");
    const fixedDate = new Date(item.releaseDate);

    return (
      <div key={item.collectionId} className="pure-g artist-page-card">
        <div className="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-3 text-align-center ">
          <img src={resizedImage} />
        </div>
        <div className="pure-u-1-1 pure-u-md-1-2 pure-u-lg-2-3 artist-page-content">
          <h5 className="title is-5">{item.collectionName}</h5>
          <p>${item.collectionPrice}</p>
          <p>
            {item.primaryGenreName} {item.collectionType}
          </p>
          <p>Tracks: {item.trackCount}</p>
          <p>Explicit Content: {item.collectionExplicitness}</p>
          <p>Date Released: {fixedDate.toLocaleDateString()}</p>
          <p className="marg-bot-1">{item.copyright}</p>
          <ReactAudioPlayer src="rickrolled.mp3" controls />
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5 className="subtitle is-5">Additional Works by</h5>
      <h3 className="title is-3">{artist?.artistName}</h3>
      <div>{mainAlbum}</div>
    </div>
  );
};
