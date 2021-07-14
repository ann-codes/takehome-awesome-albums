// import http from "../utilities/http";
import axios from "axios";

const http = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

class ArtistService {
  getArtistAndAlbums(id : string | undefined) {
    return http.get(`lookup?id=${id}&entity=album`);
  }
}

export default new ArtistService();
