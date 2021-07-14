// import http from "../utilities/http";
import axios from "axios";

const http = axios.create({
  baseURL: "https://itunes.apple.com/us/rss/topalbums/",
  headers: {
    "Content-type": "application/json",
  },
});

class AlbumService {
  getTopNAlbums(limit = 100) {
    return http.get(`limit=${limit}/json`);
  }
}

export default new AlbumService();
