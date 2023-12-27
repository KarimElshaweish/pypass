import { Hotel } from "../../../types/types";

const initialState = {};
export enum TrendingHotelsAction {
  SET_TRENDING_HOTELS = "SET/TRENDING_HOTELS",
}

interface SetTrendingAction {
  type: TrendingHotelsAction.SET_TRENDING_HOTELS;
  hotels: Hotel[];
}

type Action = SetTrendingAction;

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case TrendingHotelsAction.SET_TRENDING_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      };
    default:
      return state;
  }
};
