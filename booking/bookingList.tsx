import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BookingRowItem from "./bookingRowItem";
import { Dimisions } from "../branding";

const renderItem = ({ item }) => <BookingRowItem />;
const BookingList = () => {
  return (
    <FlatList data={Array(3)} renderItem={renderItem} style={styles.lsit} />
  );
};
const styles = StyleSheet.create({
  lsit: {
    marginTop: Dimisions.sectionSpacing,
  },
});
export default BookingList;
