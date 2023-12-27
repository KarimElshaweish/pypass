import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import FiledInput from "../filedInput";
import PasswordInput from "../passwordInput";
import { Text } from "@ui-kitten/components";
import { Colors, Dimisions } from "../../branding";
import validator from "validator";
import {
  useFirebaseSignupError,
  useSelectFriebaseIsLoading,
  useSetFirebaseSignupError,
  useSignUp,
} from "../../firebase";
import Spinner from "react-native-loading-spinner-overlay";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isLoading = useSelectFriebaseIsLoading();
  const signUp = useSignUp();
  const firebaseError = useFirebaseSignupError();
  const setError = useSetFirebaseSignupError();

  const onPress = () => {
    signUp(email, password, userName);
  };
  const onChangeEmailText = (value: string) => {
    setEmail(value);
  };
  const onChangeUserNameText = (value: string) => {
    setUserName(value);
  };
  const onChangePasswordText = (value: string) => {
    setPassword(value);
  };
  const disabled = !(email && password && userName);
  const validEmailInput = !validator.isEmail(email) && !!email;
  useEffect(() => {
    if (firebaseError) {
      Alert.alert("Error", firebaseError, [
        { text: "OK", onPress: () => setError(null) },
      ]);
    }
  }, [firebaseError]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <FiledInput
        title="Username"
        placeholder="Create your username"
        onChangeText={onChangeUserNameText}
      />
      <FiledInput
        title="E-mail"
        placeholder="Enter your e-mail"
        onChangeText={onChangeEmailText}
        validInput={validEmailInput}
        invalidMessage="Invalid email"
      />
      <PasswordInput onChangeText={onChangePasswordText} />
      <TouchableOpacity
        style={disabled ? styles.disabledBtn : styles.signupBtn}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles.signupTitle}>Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Dimisions.primarySpacing * 2.5,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  forgetPassword: {
    color: Colors.title,
    fontFamily: "app-font",
    marginTop: Dimisions.primaryBorderSize * 2,
    textAlign: "right",
  },
  signupBtn: {
    alignSelf: "center",
    backgroundColor: Colors.praimary,
    borderRadius: 20,
    marginTop: Dimisions.secondrySpacing * 2,
    paddingHorizontal: Dimisions.primarySpacing * 6,
    paddingVertical: Dimisions.secondrySpacing,
  },
  signupTitle: {
    fontFamily: "app-font-bold",
    color: "white",
    fontSize: 18,
  },
  disabledBtn: {
    alignSelf: "center",
    backgroundColor: Colors.grey,
    borderRadius: 20,
    marginTop: Dimisions.secondrySpacing * 2,
    paddingHorizontal: Dimisions.primarySpacing * 6,
    paddingVertical: Dimisions.secondrySpacing,
  },
});
export default Signup;
