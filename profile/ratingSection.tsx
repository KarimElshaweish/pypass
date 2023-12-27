import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
const ValueSection = ({ rating }: { rating: RatingValue }) => {
  return (
    <View>
      <Text style={styles.value}> {rating.value}</Text>
      <Text style={styles.label}> {rating.title}</Text>
    </View>
  );
};
interface RatingValue {
  value: number;
  title: string;
}
const valuesMap: RatingValue[] = [
  {
    value: 47,
    title: "Reviews",
  },
  {
    value: 75,
    title: "Transactions",
  },
  {
    value: 2,
    title: "Bookings",
  },
];
const RatingSection = () => {
  return (
    <View style={styles.container}>
      {valuesMap.map((item) => (
        <ValueSection rating={item} key={item.title} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Dimisions.sectionSpacing,
    paddingVertical: Dimisions.secondrySpacing,
    marginHorizontal: Dimisions.sectionSpacing,
    borderRadius: Dimisions.borderRaduis,
    marginTop: Dimisions.primarySpacing * 4,
  },
  value: {
    color: Colors.praimary,
    fontFamily: "app-font-bold",
    fontSize: 28,
    textAlign: "center",
  },
  label: {
    color: Colors.title,
    fontFamily: "app-font",
    fontSize: 14,
    marginTop: Dimisions.primarySpacing,
  },
});
export default RatingSection;
