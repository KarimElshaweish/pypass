import { Resource, ResourcesNamesList } from "../types/types";
import { GOOGLE_PLACE_BASE_URL, GOOGLE_API_KEY } from "@env";
const radius = 4 * 1000;
export default Object.freeze({
  [Resource.RECOMMEND_HOTELS]: () =>
    `${GOOGLE_PLACE_BASE_URL}?location=37.773972,-122.431297&radius=${radius}&type=hotel&key=${GOOGLE_API_KEY}`,
  [Resource.Poupular_HOTELS]: () =>
    `${GOOGLE_PLACE_BASE_URL}?location=27.994402,-81.760254&radius=${radius}&type=hotel&key=${GOOGLE_API_KEY}`,
  [Resource.Trending_HOTELS]: () =>
    `${GOOGLE_PLACE_BASE_URL}?location= 30.033333,31.233334&radius=${radius}&type=hotel&key=${GOOGLE_API_KEY}`,
});
