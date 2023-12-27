import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
import HonorIcon from "../assets/icons/honor";
import GreenRightArrow from "../assets/icons/greenRightArrow";
import LogoutIcon from "../assets/icons/logout";
import SuccessIcon from "../assets/icons/success";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAppNavation from "../navigation/useAppNavation";
import { ResourcesNamesList } from "../types/types";
import { useLogout } from "../firebase";
const SettingOption = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.row}>
        <HonorIcon />
        <Text style={styles.itemText}>User Settings</Text>
      </View>
      <GreenRightArrow />
    </View>
  );
};
const BookingOption = () => {
  const nav = useAppNavation();
  const onPress = () => nav.navigate(ResourcesNamesList.BOOKING);
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.row}>
        <SuccessIcon />
        <Text style={styles.itemText}>Booking</Text>
      </View>
      <GreenRightArrow />
    </TouchableOpacity>
  );
};
const LogoutSection = () => {
  const logout = useLogout();
  const onPress = () => logout();
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.row}>
        <LogoutIcon />
        <Text style={styles.itemText}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
};
const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Options</Text>
      <SettingOption />
      <LogoutSection />
      <BookingOption />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Dimisions.sectionSpacing + Dimisions.primarySpacing,
    marginHorizontal: Dimisions.sectionSpacing,
  },
  headline: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
  },
  itemContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Dimisions.primarySpacing * 2,
    marginTop: Dimisions.sectionSpacing,
  },
  itemText: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 16,
    marginLeft: Dimisions.primarySpacing * 2,
  },
});
export default Options;
