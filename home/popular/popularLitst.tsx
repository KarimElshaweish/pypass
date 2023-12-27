import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { Hotel } from "../../types/types";
import RowItem from "../rowItem";
import { useLoadPopularHotels, usePopularHotels } from "../hooks";

const renderItem = ({ item }: { item: Hotel }) => <RowItem hotel={item} />;

const PopularList = () => {
  const hotels = usePopularHotels();
  const loadPopularHotels = useLoadPopularHotels();
  useEffect(() => {
    if (!hotels.length) {
      loadPopularHotels();
    }
  }, []);

  return <FlatList data={hotels} horizontal renderItem={renderItem} />;
};

export default PopularList;
