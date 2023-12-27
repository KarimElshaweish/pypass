import { Hotel } from "../../../types/types";

const initialState = {};
export enum RecommendActions {
  SET_RECOMMEND_HOTELS = "SET/RECOMMEND_HOTELS",
}
interface SetRecommendAction {
  type: RecommendActions.SET_RECOMMEND_HOTELS;
  hotels: Hotel[];
}

type Action = SetRecommendAction;

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case RecommendActions.SET_RECOMMEND_HOTELS:
      return {
        ...state,
        hotels: action.hotels,
      };
    default:
      return state;
  }
};
