import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
const BookingRowItem = () => {
  return (
    <View style={styles.cotainer}>
      <Image style={styles.img} source={require("../assets/default.jpeg")} />
      <View style={styles.textContianer}>
        <Text style={styles.title}>Tropicasa De Hotel</Text>
        <Text style={styles.location}>Amsterdam, Netherlands</Text>
        <Text style={styles.duration}>from 22/1/2020 To 25/1/2020</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cotainer: {
    backgroundColor: "white",
    flexDirection: "row",
    marginHorizontal: Dimisions.sectionSpacing,
    marginBottom: Dimisions.primarySpacing,
    paddingBottom: Dimisions.secondrySpacing,
    borderRadius: Dimisions.borderRaduis,
  },
  textContianer: {
    marginLeft: Dimisions.primaryBorderSize + 5,
    marginTop: Dimisions.secondrySpacing,
  },
  img: {
    width: 95,
    height: 95,
    borderRadius: Dimisions.borderRaduis / 2,
  },
  title: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 18,
  },
  location: {
    fontFamily: "app-font",
    color: Colors.title,
    fontSize: 14,
    marginTop: Dimisions.secondrySpacing,
  },
  duration: {
    fontFamily: "app-font",
    color: Colors.title,
    fontSize: 14,
    marginTop: Dimisions.primarySpacing,
  },
});
export default BookingRowItem;
