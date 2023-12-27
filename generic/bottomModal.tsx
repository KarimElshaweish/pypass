import React from "react";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import BottomButton from "./bottomButton";
import { Colors } from "../branding";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import RightArrowIcon from "../assets/icons/rightArrow";
interface Props {
  showingButtonText: string;
  children: React.ReactNode;
}
const BottomModal = ({ showingButtonText, children }: Props) => {
  const bottomSheetRef = React.useRef(null);
  const snapPoints = ["70%"];
  const handlePresentModal = () => {
    bottomSheetRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <BottomButton text={showingButtonText} onPress={handlePresentModal} />
      <BottomSheetModal ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
const styls = StyleSheet.create({});
export default BottomModal;
