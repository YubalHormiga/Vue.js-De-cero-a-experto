import { GIFResponse } from "../interfaces/gif.response";
import { gitphAPI } from "./10-axios";

export const getImage = async () => {
  try {
    const resp = await gitphAPI.get<GIFResponse>("/random");
    return resp.data.data.images.downsized_medium.url;
  } catch (error) {
    console.log(error);
  }
};
getImage()
  .then((url) => console.log(url))
  .catch((error) => console.log(error));
