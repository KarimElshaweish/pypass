import React from "react";
import DescriptionCard from "./descriptionCard";
import { Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors, Dimisions } from "../branding";
import { BottomButton, BottomModal } from "../generic";
import useAppNavation from "../navigation/useAppNavation";
import { Calendar } from "react-native-calendars";
import { MarkedDates, Theme } from "react-native-calendars/src/types";
import RightArrowIcon from "../assets/icons/rightArrow";
import { Hotel } from "../types/types";

const text1 =
  "Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you.";
const text2 =
  "Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby.";
const text3 =
  "You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.";
const textArry = [text1, text2, text3];
const markedDates: MarkedDates = {
  "2023-12-04": { startingDay: true, color: Colors.praimary },
  "2023-12-05": { color: "rgba(0, 167, 110, 0.2)" },
  "2023-12-06": { color: "rgba(0, 167, 110, 0.2)" },
  "2023-12-07": { color: "rgba(0, 167, 110, 0.2)" },
  "2023-12-08": { color: "rgba(0, 167, 110, 0.2)" },
  "2023-12-09": { color: Colors.praimary, endingDay: true },
};
const theme: Theme = {
  backgroundColor: Colors.background,
  calendarBackground: Colors.background,
  textSectionTitleColor: Colors.title,
  todayTextColor: Colors.praimary,
  dayTextColor: Colors.title,
  textDayFontFamily: "app-font",
  textDayHeaderFontFamily: "app-font",
  arrowColor: Colors.praimary,
};
const DatesLabels = () => {
  return (
    <View style={styles.datesCotainer}>
      <View>
        <Text style={styles.dateLabel}>Check In</Text>
        <Text style={styles.dateText}>May 17</Text>
      </View>
      <RightArrowIcon />
      <View style={styles.container}>
        <Text style={styles.dateLabel}>Check Out</Text>
        <Text style={styles.dateText}>May 17</Text>
      </View>
    </View>
  );
};
interface Props {
  hotel: Hotel;
}
const Description = ({ hotel }: Props) => {
  return (
    <View style={styles.container}>
      <DescriptionCard hotel={hotel} />
      {textArry.map((text) => (
        <Text key={text} style={styles.text}>
          {text}
        </Text>
      ))}
      <BottomModal showingButtonText="Book">
        <View style={{ backgroundColor: Colors.background }}>
          <Calendar
            style={{
              height: 350,
            }}
            current={"2023-12-26"}
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
            markingType={"period"}
            markedDates={markedDates}
            theme={theme}
          />
          <DatesLabels />
        </View>
        <BottomButton
          style={styles.buttonContainer}
          text="Continue"
          onPress={() => null}
        />
      </BottomModal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  text: {
    fontSize: 15,
    color: Colors.title,
    marginTop: Dimisions.sectionSpacing,
    marginHorizontal: Dimisions.sectionSpacing,
    fontFamily: "app-font",
  },
  datesCotainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Dimisions.primarySpacing + Dimisions.sectionSpacing,
    marginTop: Dimisions.primarySpacing + Dimisions.sectionSpacing,
  },
  buttonContainer: {
    borderRadius: 40,
    width: "80%",
    alignItems: "center",
  },
  dateLabel: {
    fontFamily: "app-font",
    color: Colors.title,
    fontSize: 18,
  },
  dateText: {
    fontFamily: "app-font-bold",
    color: Colors.title,
    fontSize: 24,
  },
});
export default Description;
