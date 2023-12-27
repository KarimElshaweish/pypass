import { useNavigation } from "@react-navigation/native";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";

const useAppNavation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};

export default useAppNavation;
