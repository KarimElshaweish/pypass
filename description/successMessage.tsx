import React from "react";
import { StyleSheet, View } from "react-native";
import BigSuccessIcon from "../assets/icons/bigSuccess";
import { Text } from "@ui-kitten/components";
import { Colors, Dimisions } from "../branding";
const SuccessMessage = () => {
  return (
    <View style={styles.container}>
      <BigSuccessIcon style={styles.icon} />
      <Text style={styles.text}>Transaction Success</Text>
      <Text style={styles.desc}>
        Congratulations! You can see your bookings in the booking section. Enjoy
        your trip!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimisions.sectionSpacing * 2,
    marginHorizontal: Dimisions.sectionSpacing,
  },
  icon: {
    alignSelf: "center",
  },
  text: {
    color: Colors.title,
    fontFamily: "app-font-bold",
    fontSize: 24,
    marginTop: Dimisions.sectionSpacing * 2,
  },
  desc: {
    color: Colors.title,
    fontFamily: "app-font",
    fontSize: 16,
    marginTop: Dimisions.primarySpacing * 2,
  },
});
export default SuccessMessage;
