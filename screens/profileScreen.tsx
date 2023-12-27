import { Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Dimisions } from "../branding";
import {
  InformationSection,
  Options,
  ProfilePicture,
  RatingSection,
} from "../profile";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfilePicture />
      <InformationSection />
      <RatingSection />
      <Options />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimisions.primarySpacing * 8,
  },
});
export default ProfileScreen;
