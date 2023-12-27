import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Hotel } from "../../types/types";
import RowItem from "../rowItem";
import { useLoadTrendingHotels, useTrendingHotels } from "../hooks";

const renderItem = ({ item }: { item: Hotel }) => <RowItem hotel={item} />;

const TrendingList = () => {
  const hotels = useTrendingHotels();
  const loadTrendingHotels = useLoadTrendingHotels();
  useEffect(() => {
    if (!hotels.length) {
      loadTrendingHotels();
    }
  }, []);
  return <FlatList data={hotels} horizontal renderItem={renderItem} />;
};

export default TrendingList;
