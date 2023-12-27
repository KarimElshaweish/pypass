import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../branding";
import { useCurrenUserName } from "../firebase";

const InformationSection = () => {
  const name = useCurrenUserName();
  return (
    <>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.locaiton}>Indonesia</Text>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 24,
    textAlign: "center",
  },
  locaiton: {
    fontFamily: "app-font-bold",
    color: Colors.grey,
    fontSize: 16,
    textAlign: "center",
  },
});

export default InformationSection;
