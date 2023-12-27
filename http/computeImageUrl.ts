import { GOOOGLE_IMAGE_BASE_URL, GOOGLE_API_KEY } from "@env";

const ComputeImageUrl = (imageRef: string, height: number, width: number) => {
  return `${GOOOGLE_IMAGE_BASE_URL}${imageRef}&sensor=false&maxheight=${height}&maxwidth=${width}&key=${GOOGLE_API_KEY}`;
};
export default ComputeImageUrl;
