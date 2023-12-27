import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import StartIcon from "../assets/icons/start";
import useAppNavation from "../navigation/useAppNavation";
import { Hotel, ResourcesNamesList } from "../types/types";
import { Dimisions, Colors } from "../branding";
import diminsion from "../branding/diminsion";
import { Text } from "@ui-kitten/components";
import { ComputeImageUrl } from "../http";
const CARD_WIDTH = 256;
const CARD_HEIGHT = 424;
interface Props {
  hotel: Hotel;
}
const RowItem = ({ hotel }: Props) => {
  const { name, photos, rating, vicinity } = hotel;
  const nav = useAppNavation();
  const cover = photos?.[0];
  const computeImage =
    cover !== undefined
      ? {
          uri: ComputeImageUrl(
            cover.photo_reference,
            cover.height,
            cover.width,
          ),
        }
      : require("../assets/default.jpeg");

  const onPress = () => nav.navigate(ResourcesNamesList.DESCRIPTIOM, { hotel });
  return (
    <TouchableOpacity style={styles.itemContianer} onPress={onPress}>
      <Image style={styles.itemImg} source={computeImage} />
      <View style={styles.rating}>
        <StartIcon />
        <Text style={styles.ratingText}>{rating ?? "N/A"}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationName}>{name}</Text>
        <Text style={styles.locationPlace}>{vicinity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContianer: {
    borderRadius: Dimisions.borderRaduis,
    marginRight: Dimisions.sectionSpacing,
    marginTop: Dimisions.sectionSpacing * 3,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  itemImg: {
    borderRadius: Dimisions.borderRaduis,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  ratingText: {
    fontSize: 12,
    color: "white",
    alignSelf: "center",
    fontFamily: "app-font-bold",
    marginHorizontal: diminsion.primarySpacing / 2,
  },
  rating: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.title,
    opacity: 0.6,
    right: 0,
    marginTop: Dimisions.primarySpacing * 2,
    marginRight: Dimisions.primarySpacing * 2,
    padding: Dimisions.primarySpacing / 2,
    borderRadius: Dimisions.borderRaduis + 5,
  },
  locationContainer: {
    position: "absolute",
    bottom: 0,
    marginLeft: Dimisions.sectionSpacing,
    marginBottom: Dimisions.sectionSpacing,
  },
  locationName: {
    fontSize: 20,
    color: "white",
    fontFamily: "app-font-bold",
  },
  locationPlace: {
    fontSize: 14,
    color: "white",
    fontFamily: "app-font",
  },
});
export default RowItem;
