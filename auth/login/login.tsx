import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Colors, Dimisions } from "../../branding";
import PasswordInput from "../passwordInput";
import FiledInput from "../filedInput";
import useAppNavation from "../../navigation/useAppNavation";
import { BottomButton } from "../../generic";
import {
  useFirebaseLoginError,
  useLogin,
  useSelectFriebaseIsLoading,
  useSetFirebaseLoginError,
} from "../../firebase";
import Spinner from "react-native-loading-spinner-overlay";
const Login = () => {
  const nav = useAppNavation();
  const isLoading = useSelectFriebaseIsLoading();
  const firebaseError = useFirebaseLoginError();
  const setError = useSetFirebaseLoginError();
  const login = useLogin();
  const onPress = () => {
    login(email, password);
  };
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmailText = (value: string) => {
    setEmail(value);
  };
  const onChangePasswordText = (value: string) => {
    setPassword(value);
  };
  useEffect(() => {
    if (firebaseError) {
      Alert.alert("Error", firebaseError, [
        { text: "OK", onPress: () => setError(null) },
      ]);
    }
  }, [firebaseError]);

  console.log(firebaseError);
  return (
    <View style={styles.container}>
      <Spinner
        visible={isLoading && !firebaseError}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />

      <FiledInput
        title="Username or E-mail"
        placeholder="User name or Email"
        onChangeText={onChangeEmailText}
        invalidMessage="Invalid email"
      />
      <PasswordInput onChangeText={onChangePasswordText} />
      <TouchableOpacity>
        <Text style={styles.forgetPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <BottomButton text="Login" onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Dimisions.primarySpacing * 2.5,
    paddingTop: Dimisions.primarySpacing * 4,
  },
  forgetPassword: {
    color: Colors.title,
    fontFamily: "app-font",
    marginTop: Dimisions.primaryBorderSize * 2,
    textAlign: "right",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
export default Login;
