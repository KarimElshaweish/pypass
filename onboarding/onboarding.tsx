import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors, Dimisions } from "../branding";
import { useNavation } from "../navigation";
import { ResourcesNamesList } from "../types/types";
import { BottomButton } from "../generic";
const Onboarding = () => {
  const nav = useNavation();
  const onPress = () => nav.navigate(ResourcesNamesList.AUTH);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/onboarding.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Travel with no worry</Text>
        <Text style={styles.desc}>
          You can now experience the next level travel experience for hotel
          bookings.
        </Text>
      </View>
      <BottomButton text="Next" onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  textContainer: {
    marginLeft: Dimisions.sectionSpacing,
  },
  title: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 24,
    marginTop: Dimisions.primarySpacing * 6,
  },
  desc: {
    fontFamily: "app-font",
    color: Colors.title,
    fontSize: 16,
    marginTop: Dimisions.primarySpacing * 2,
  },
});
export default Onboarding;
