import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors, Dimisions } from "../branding";
import { Text } from "@ui-kitten/components";
import { HomeTabs } from "../home";
import { useCurrenUserName } from "../firebase";
import HonorIcon from "../assets/icons/honor";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAppNavation from "../navigation/useAppNavation";
import { ResourcesNamesList } from "../types/types";
const HomeScreen = () => {
  const name = useCurrenUserName();
  const nav = useAppNavation();
  const onPress = () => {
    nav.navigate(ResourcesNamesList.PROFILE);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <HonorIcon style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>Good Morning,</Text>
      <Text style={styles.text}> {`${name}!`}</Text>
      <HomeTabs />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Dimisions.sectionSpacing,
  },
  text: {
    fontSize: 20,
    fontFamily: "app-font-bold",
    color: Colors.title,
  },
  icon: {
    alignSelf: "flex-end",
    marginRight: Dimisions.sectionSpacing,
    marginBottom: Dimisions.sectionSpacing + Dimisions.primarySpacing,
  },
});
export default HomeScreen;
