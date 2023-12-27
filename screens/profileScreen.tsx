import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Dimisions } from "../branding";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  InformationSection,
  Options,
  ProfilePicture,
  RatingSection,
} from "../profile";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfilePicture />
        <InformationSection />
        <RatingSection />
        <Options />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimisions.primarySpacing * 8,
  },
});
export default ProfileScreen;
