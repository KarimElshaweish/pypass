import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { Colors, Dimisions } from "../branding";
import CamerIcon from "../assets/icons/camer";
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
