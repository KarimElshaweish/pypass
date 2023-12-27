import React from "react";
import Description from "../description/description";
import { useRoute } from "@react-navigation/native";
import { ResourcesNamesList, RootRouteProps } from "../types/types";
import { BackView } from "../generic";
import { SafeAreaView } from "react-native-safe-area-context";

const DescriptipnScreen = () => {
  const route = useRoute<RootRouteProps<ResourcesNamesList.DESCRIPTIOM>>();
  const { hotel } = route.params;
  return (
    <SafeAreaView>
      <BackView title="Description" />
      <Description hotel={hotel} />
    </SafeAreaView>
  );
};

export default DescriptipnScreen;
