// Keep types form API endpoint in shared types

interface AlbumStringLabel {
  label: string;
}

interface AlbumStringLabelAndTerm extends AlbumStringLabel {
  term: string;
}

interface AlbumImageLabel {
  label: string;
  attributes: {
    height: string;
  };
}

interface AlbumContentType {
  "im:contentType": {
    attributes: AlbumStringLabelAndTerm;
  };
  attributes: AlbumStringLabelAndTerm;
}

interface AlbumLinkInfo {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

interface AlbumIdInfo {
  label: string;
  attributes: {
    "im:id": string;
  };
}

interface AlbumArtistInfo {
  label: string;
  attributes?: {
    href?: string;
  };
}

interface AlbumCategoryAttributes {
  attributes: {
    "im:id": string;
    term: string;
    scheme: string;
    label: string;
  };
}

interface AlbumReleaseDateInfo {
  label: string;
  attributes: AlbumStringLabel;
}

export interface AlbumEntry {
  id: AlbumIdInfo;
  title: AlbumStringLabel;
  category: AlbumCategoryAttributes;
  rights: AlbumStringLabel;
  link: AlbumLinkInfo;
  "im:name": AlbumStringLabel;
  "im:artist": AlbumArtistInfo;
  "im:image": AlbumImageLabel[];
  "im:itemCount": AlbumStringLabel;
  "im:contentType": AlbumContentType;
  "im:releaseDate": AlbumReleaseDateInfo;
}

export interface AlbumLists {
  filter(arg0: (album: AlbumEntry) => boolean): AlbumLists;
  map(arg0: (album: AlbumEntry) => JSX.Element): JSX.Element;
  entry: AlbumEntry[];
}

export interface ArtistType {
  artistId: number;
  artistLinkUrl: string;
  artistName: string;
  artistType: string;
  primaryGenreId: number;
  primaryGenreName: string;
  wrapperType: string;
}

export interface ArtistPageAlbumType {
  map(arg0: (item: ArtistPageAlbumType) => JSX.Element): JSX.Element;
  filter(arg0: (item: ArtistPageAlbumType) => boolean): ArtistPageAlbumType;
  find(arg0: (item: ArtistPageAlbumType) => boolean): ArtistPageAlbumType;
  sort(
    arg0: (a: { releaseDate: number }, b: { releaseDate: number }) => number
  ): ArtistPageAlbumType;
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionType: string;
  collectionViewUrl: string;
  copyright: string;
  country: string;
  currency: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number;
  wrapperType: string;
}
