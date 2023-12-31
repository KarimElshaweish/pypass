import React from "react";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import BottomButton from "./bottomButton";
import { StyleSheet } from "react-native";
interface Props {
  showingButtonText: string;
  children: React.ReactNode;
  snap?: string;
}
const BottomModal = ({ showingButtonText, children, snap = "80%" }: Props) => {
  const bottomSheetRef = React.useRef(null);
  const snapPoints = [snap];
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
