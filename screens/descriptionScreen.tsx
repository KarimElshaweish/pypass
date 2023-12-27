import React from "react";
import { SafeAreaView } from "react-native";
import Description from "../description/description";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ResourcesNamesList, RootRouteProps } from "../types/types";
import { BackView } from "../generic";
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
