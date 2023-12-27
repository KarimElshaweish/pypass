import { Text } from "@ui-kitten/components";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Colors, Dimisions } from "../branding";
interface Props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
const BottomButton = ({ text, onPress, style, disabled = false }: Props) => {
  return (
    <TouchableOpacity
      style={[!disabled ? styles.container : styles.disabledBtn, style]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Dimisions.sectionSpacing * 3,
    alignSelf: "center",
    backgroundColor: Colors.praimary,
    borderRadius: 20,
    paddingHorizontal: Dimisions.primarySpacing * 6,
    paddingVertical: Dimisions.secondrySpacing,
  },
  disabledBtn: {
    alignSelf: "center",
    backgroundColor: Colors.grey,
    borderRadius: 20,
    marginTop: Dimisions.secondrySpacing * 2,
    paddingHorizontal: Dimisions.primarySpacing * 6,
    paddingVertical: Dimisions.secondrySpacing,
  },
  text: {
    fontFamily: "app-font-bold",
    color: "white",
    fontSize: 18,
  },
});

export default BottomButton;
