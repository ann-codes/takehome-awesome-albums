// import http from "../utilities/http";
import axios from "axios";

const proxy = "https://ann-cors-lite.herokuapp.com/";

const http = axios.create({
  baseURL: `${proxy}https://itunes.apple.com/`,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

class ArtistService {
  getArtistAndAlbums(id: string | undefined) {
    return http.get(`lookup?id=${id}&entity=album`);
  }
}

export default new ArtistService();
