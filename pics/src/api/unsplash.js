import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b715f6c973468708bacb3198f52c73941849e18221b070c25fd4c862ed2ae2f0"
  }
});
