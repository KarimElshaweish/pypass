import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Colors, Dimisions } from "../branding";
import CamerIcon from "../assets/icons/camer";

const PorfilePicure = () => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={require("../assets/profile.png")} />
      <View style={styles.takeIamge}>
        <CamerIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignSelf: "center",
  },
  img: {
    alignSelf: "center",
  },
  takeIamge: {
    backgroundColor: Colors.praimary,
    padding: 8,
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: Dimisions.primarySpacing * 4,
    marginRight: Dimisions.primarySpacing * 2,
    borderRadius: Dimisions.borderRaduis,
    borderColor: "white",
    borderWidth: 2,
  },
});
export default PorfilePicure;
