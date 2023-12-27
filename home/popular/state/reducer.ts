import { Hotel } from "../../../types/types";

const initialState = {};
export enum PopularHotelsAction {
  SET_POPULAR_HOTELS = "SET/POPULAR_HOTELS",
}

interface SetPopularAction {
  type: PopularHotelsAction.SET_POPULAR_HOTELS;
  hotels: Hotel[];
}

type Action = SetPopularAction;

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case PopularHotelsAction.SET_POPULAR_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      };
    default:
      return state;
  }
};
