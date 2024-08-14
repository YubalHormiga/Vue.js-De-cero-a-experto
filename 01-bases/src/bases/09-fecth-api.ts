import { type GIFResponse } from "../interfaces/gif.response";

const apiKey = "MVnG57APVH0Rn3vhNfc48f1Jyxuyu3dM";

fetch(`https://api.giphy.com/v1/gifs/random/?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((body: GIFResponse) => console.log( body.data.images.downsized_medium.url ))
  .catch((error) => console.log(error));
