import React from "react";
import { StyleSheet } from "react-native";
import { Colors, Dimisions } from "../branding";
import { BackView } from "../generic";
import { BookingList } from "../booking";
import { SafeAreaView } from "react-native-safe-area-context";
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
