import React, { useState } from "react";
import DescriptionCard from "./descriptionCard";
import { Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { Colors, Dimisions } from "../branding";
import { BottomButton, BottomModal } from "../generic";
import { Hotel } from "../types/types";
import SuccessMessage from "./successMessage";
import CalendarView from "./calenderView";
import useAppNavation from "../navigation/useAppNavation";

const text1 =
  "Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you.";
const text2 =
  "Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby.";
const text3 =
  "You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.";
const textArry = [text1, text2, text3];

interface Props {
  hotel: Hotel;
}
const Description = ({ hotel }: Props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [snap, setSnap] = useState("80%");
  const nav = useAppNavation();
  const buttonText = showSuccessMessage ? "Back To Home" : "Book";
  const onPress = () => {
    if (!showSuccessMessage) {
      setShowSuccessMessage(true);
      setSnap("60%");
    } else {
      nav.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <DescriptionCard hotel={hotel} />
      {textArry.map((text) => (
        <Text key={text} style={styles.text}>
          {text}
        </Text>
      ))}
      <BottomModal showingButtonText="Book" snap={snap}>
        {showSuccessMessage ? <SuccessMessage /> : <CalendarView />}

        <BottomButton
          style={styles.buttonContainer}
          text={buttonText}
          onPress={onPress}
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
  buttonContainer: {
    borderRadius: 40,
    width: "80%",
    alignItems: "center",
  },
});
export default Description;
