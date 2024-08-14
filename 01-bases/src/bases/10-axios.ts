import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = "MVnG57APVH0Rn3vhNfc48f1Jyxuyu3dM";
export const gitphAPI = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

// gitphAPI
//   .get<GIFResponse>("/random")
//   .then((res) => console.log(res.data.data.images.downsized_medium.url))
//   .catch((error) => console.log(error));
