import React from "react";
import { StyleSheet, View } from "react-native";
import BackIcon from "../assets/icons/back";
import { Dimisions, Colors } from "../branding";
import { Text } from "@ui-kitten/components";
import useAppNavation from "../navigation/useAppNavation";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  title: string;
}
const BackView = ({ title }: Props) => {
  const nav = useAppNavation();
  const onPress = () => nav.goBack();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <BackIcon />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
export default BackView;
