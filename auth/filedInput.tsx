import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Dimisions, Colors } from "../branding";
import { Text } from "@ui-kitten/components";

interface Props {
  title: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  validInput?: boolean;
  invalidMessage?: string;
}
const FiledInput = ({
  title,
  placeholder,
  onChangeText,
  validInput,
  invalidMessage,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {validInput ? (
        <Text style={styles.errorMessage}> {invalidMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Dimisions.primarySpacing * 4,
  },
  title: {
    fontFamily: "app-font-bold",
    fontSize: 16,
    color: Colors.title,
  },
  input: {
    backgroundColor: "white",
    marginTop: Dimisions.primarySpacing * 2,
    paddingHorizontal: Dimisions.primarySpacing * 2,
    paddingVertical: Dimisions.secondrySpacing,
    borderRadius: Dimisions.primaryBorderSize * 2,
    fontFamily: "app-font",
    fontSize: 16,
  },
  errorMessage: {
    fontFamily: "app-font",
    fontSize: 14,
    color: "red",
    marginLeft: Dimisions.primarySpacing,
  },
});
export default FiledInput;
