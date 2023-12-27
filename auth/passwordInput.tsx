import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, Dimisions } from "../branding";
import { Text } from "@ui-kitten/components";

interface Props {
  onChangeText: (value: string) => void;
}
const PasswordInput = ({ onChangeText }: Props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChange = (value: string) => {
    setPassword(value);
    onChangeText(value);
  };
  return (
    <>
      <Text style={styles.title}>Password</Text>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter Password"
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color={Colors.grey}
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: Dimisions.primarySpacing * 2,
    paddingHorizontal: Dimisions.primarySpacing * 2,
    paddingVertical: Dimisions.secondrySpacing,
    borderRadius: Dimisions.primaryBorderSize * 2,
  },
  title: {
    fontFamily: "app-font-bold",
    fontSize: 16,
    color: Colors.title,
    marginTop: Dimisions.secondrySpacing * 2,
  },
  input: {
    flex: 1,
    color: Colors.title,
    fontFamily: "app-font",
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  heading: {
    alignItems: "center",
    fontSize: 20,
    color: "green",
    marginBottom: 20,
  },
});
export default PasswordInput;
