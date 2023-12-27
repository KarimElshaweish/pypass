import { combineReducers } from "redux";
import { recommendHotelsReducer } from "../home/recommend/state";
import { popularHotelReducer } from "../home/popular/state";
import { trendingHotelReducer } from "../home/trending/state";
import { FirebaseReducer } from "../firebase";

export default combineReducers({
  recommendHotels: recommendHotelsReducer,
  popularHotels: popularHotelReducer,
  trendingHotels: trendingHotelReducer,
  firebase: FirebaseReducer,
});
