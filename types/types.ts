import { RouteProp } from "@react-navigation/native";

export enum ResourcesNamesList {
  ON_BOARDING = "onBoarding",
  AUTH = "auth",
  HOME = "home",
  DESCRIPTIOM = "description",
  PROFILE = "profile",
  BOOKING = "booking",
}

export type RootStackParamList = {
  [ResourcesNamesList.ON_BOARDING]: undefined;
  [ResourcesNamesList.AUTH]: undefined;
  [ResourcesNamesList.HOME]: undefined;
  [ResourcesNamesList.DESCRIPTIOM]: { hotel: Hotel };
  [ResourcesNamesList.PROFILE]: undefined;
  [ResourcesNamesList.BOOKING]: undefined;
};
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
export enum Resource {
  RECOMMEND_HOTELS = "recommendHotels",
  Poupular_HOTELS = "popularHotels",
  Trending_HOTELS = "triendingHotels",
}
interface Firebase {
  isloading: boolean;
  loginError: string;
  signupError: string;
}
export interface GlobalState {
  recommendHotels: { hotels: Hotel[] };
  popularHotels: { hotels: Hotel[] };
  trendingHotels: { hotels: Hotel[] };
  firebase: Firebase;
}
export interface Hotel {
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos: GooglePhoto[];
  place_id: string;
  reference: string;
  scope: string;
  types: string[];
  vicinity: string;
  rating: string;
  user_ratings_total: string;
}
export interface GooglePhoto {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}
interface Geometry {
  location: Location;
  viewport: Viewport;
}
interface Viewport {
  northeast: Location;
  southwest: Location;
}
interface Location {
  lat: number;
  lng: number;
}
