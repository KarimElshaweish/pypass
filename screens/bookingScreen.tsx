import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import BackIcon from "../assets/icons/back";
import { Text } from "@ui-kitten/components";
import { Colors, Dimisions } from "../branding";
import { BackView } from "../generic";
import { BookingList } from "../booking";
const BookingScreen = () => {
  return (
    <SafeAreaView>
      <BackView title="Booking" />
      <BookingList />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: Dimisions.sectionSpacing,
  },
  text: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 20,
    marginLeft: Dimisions.primarySpacing * 2,
  },
});
export default BookingScreen;
