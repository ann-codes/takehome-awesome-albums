/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import ArtistService from "../../services/ArtistService";
import { ArtistPageAlbumType, ArtistType } from "../../shared/types";
import { useQuery } from "../../shared/utils";

import { ArtistDetailsCard } from "../ArtistDetailsCard/ArtistDetailsCard";

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

  // console.log(albums); //////// ==========

  const allAlbums = albums?.map((item: ArtistPageAlbumType) => (
    <ArtistDetailsCard item={item} key={item.collectionId} />
  ));

  return (
    <div>
      <h5 className="subtitle is-5">Additional Works by</h5>
      <h3 className="title is-3">{artist?.artistName}</h3>
      <div>{allAlbums}</div>
    </div>
  );
};
