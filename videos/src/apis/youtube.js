import axios from "axios";

const KEY = "AIzaSyCy4j41xG0ImdqT_O28aVueJehH7sAGhAQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
