
import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    safeSearch: "strict",
    key: process.env.REACT_APP_API_KEY_YOUTUBE
  }
});
