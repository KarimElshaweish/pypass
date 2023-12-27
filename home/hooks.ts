import { useSelector } from "react-redux";
import { Urls, useGetAxios } from "../http";
import { GlobalState } from "../types/types";
import { RecommendActions } from "./recommend/state/reducer";
import { PopularHotelsAction } from "./popular/state/reducer";
import { TrendingHotelsAction } from "./trending/state/reducer";

export const useLoadRecommendHotels = () => {
  const getAxios = useGetAxios();
  return () => {
    getAxios(
      Urls.recommendHotels(),
      RecommendActions.SET_RECOMMEND_HOTELS,
      "hotels",
    );
  };
};

export const useLoadPopularHotels = () => {
  const getAxios = useGetAxios();
  return () => {
    getAxios(
      Urls.popularHotels(),
      PopularHotelsAction.SET_POPULAR_HOTELS,
      "hotels",
    );
  };
};

export const useLoadTrendingHotels = () => {
  const getAxios = useGetAxios();
  return () => {
    getAxios(
      Urls.triendingHotels(),
      TrendingHotelsAction.SET_TRENDING_HOTELS,
      "hotels",
    );
  };
};

export const useTrendingHotels = () =>
  useSelector((state: GlobalState) => state.trendingHotels.hotels || []);
export const useRecommendHotels = () =>
  useSelector((state: GlobalState) => state.recommendHotels.hotels || []);
export const usePopularHotels = () =>
  useSelector((state: GlobalState) => state.popularHotels.hotels || []);
