import { AlbumEntry } from "../../shared/types";

export type AlbumListCardProps = {
  album: AlbumEntry;
  getArtistID: string | undefined;
};
