import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
import StartIcon from "../assets/icons/start";
import { ComputeImageUrl } from "../http";
import { Hotel } from "../types/types";
interface Props {
  hotel: Hotel;
}
const DescriptionCard = ({ hotel }: Props) => {
  const { name, photos, vicinity, rating, user_ratings_total } = hotel;
  const photo = photos?.[0].photo_reference;
  const computeImage =
    photo !== undefined
      ? {
          uri: ComputeImageUrl(photo, 95, 95),
        }
      : require("../assets/default.jpeg");
  return (
    <View style={styls.container}>
      <Image style={styls.img} source={computeImage} />
      <View style={styls.descContianer}>
        <Text style={styls.title}>{name}</Text>
        <Text style={styls.place}>{vicinity}</Text>
        <View style={styls.ratingContainer}>
          {rating !== undefined ? (
            <>
              <StartIcon />
              <Text style={styls.ratingText}>{rating}</Text>
              <Text style={styls.reviews}>({user_ratings_total} Reviews)</Text>
            </>
          ) : (
            <Text style={styls.reviews}>No Reviews</Text>
          )}
        </View>
      </View>
    </View>
  );
};
const styls = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: Dimisions.borderRaduis,
    marginHorizontal: Dimisions.sectionSpacing,
    paddingTop: Dimisions.primarySpacing + 8,
  },
  img: {
    width: 95,
    height: 95,
    borderRadius: Dimisions.borderRaduis / 2,
  },
  descContianer: {
    marginLeft: Dimisions.secondrySpacing,
  },
  title: {
    fontFamily: "app-font-bold",
    color: Colors.title,
  },
  place: {
    color: Colors.title,
    fontFamily: "app-font",
    marginTop: Dimisions.primarySpacing,
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: Dimisions.primarySpacing - 3,
  },
  ratingText: {
    color: Colors.gold,
    fontFamily: "app-font-bold",
    alignSelf: "center",
    marginLeft: Dimisions.primarySpacing - 2,
  },
  reviews: {
    color: Colors.grey,
    fontFamily: "app-font",
    marginLeft: Dimisions.primarySpacing - 1,
    alignSelf: "center",
    fontSize: 14,
  },
});
export default DescriptionCard;
