import React from "react";
import { FlatList } from "react-native";
import { Hotel } from "../../types/types";
import RowItem from "../rowItem";
import { useLoadRecommendHotels, useRecommendHotels } from "../hooks";

const renderItem = ({ item }: { item: Hotel }) => <RowItem hotel={item} />;

const RecomendList = () => {
  const loadRecommendHotels = useLoadRecommendHotels();
  const hotels = useRecommendHotels();
  if (!hotels.length) {
    loadRecommendHotels();
  }
  console.log(hotels);
  return <FlatList data={hotels} horizontal renderItem={renderItem} />;
};

export default RecomendList;
