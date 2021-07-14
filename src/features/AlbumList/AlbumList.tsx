import React, { useEffect, useState } from "react";
import { useSearchWord } from "../../context/SearchWordContext";

import AlbumService from "../../services/AlbumService";
import { AlbumEntry, AlbumLists } from "../../shared/types";
import { AlbumListCard } from "./AlbumListCard";

export const AlbumList = () => {
  const [albums, setAlbums] = useState<AlbumLists>();
  const { filter } = useSearchWord();

  const fetchAlbums = () => {
    AlbumService.getTopNAlbums()
      .then((res) => {
        const data = res.data.feed.entry;
        setAlbums(data);
      })
      .catch((e) => {
        console.error(`Error fetching data: ${e}`);
      });
  };

  useEffect(fetchAlbums, []);

  // search functionality, to filter then map
  const filteredAlbums = albums?.filter((album: AlbumEntry) => {
    const matchText = `${album.title.label} ${album.category.attributes.label}`.toLowerCase();
    return matchText.includes(filter.toLowerCase());
  });

  const mapAlbums = filteredAlbums?.map((album: AlbumEntry) => {
    const imageToResize = album["im:image"][2].label;
    const resizedImage: string = imageToResize.replace(/170x170/i, "380x380");

    // extract artist ID from URL string
    let getArtistID: string | undefined = album["im:artist"].attributes?.href;
    if (getArtistID) {
      const match: string[] | null = getArtistID.match(/[0-9]+/);
      if (match) {
        getArtistID = match[0];
      } else {
        getArtistID = undefined;
      }
    }

    return (
      <AlbumListCard
        album={album}
        image={resizedImage}
        getArtistID={getArtistID}
        key={album.id.attributes["im:id"]}
      />
    );
  });

  return <div className="pure-g bg-light">{albums ? mapAlbums : "Loading..."}</div>;
};
