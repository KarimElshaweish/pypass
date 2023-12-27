import { StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ResourcesNamesList } from "./types/types";
import {
  AuthScreen,
  BookingScreen,
  DescriptipnScreen,
  HomeScreen,
  OnBoardingScreen,
} from "./screens";
import * as Font from "expo-font";
import { Colors } from "./branding";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./store";
import ProfileScreen from "./screens/profileScreen";

const Stack = createNativeStackNavigator();
const getFonts = () =>
  Font.loadAsync({
    "app-font": require("./assets/fonts/appFont.ttf"),
    "app-font-bold": require("./assets/fonts/appFontBold.ttf"),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={eva.dark}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  contentStyle: styles.container,
                }}
                initialRouteName={ResourcesNamesList.ON_BOARDING}
              >
                <Stack.Screen
                  name={ResourcesNamesList.ON_BOARDING}
                  component={OnBoardingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ResourcesNamesList.AUTH}
                  component={AuthScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ResourcesNamesList.HOME}
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ResourcesNamesList.DESCRIPTIOM}
                  component={DescriptipnScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ResourcesNamesList.PROFILE}
                  component={ProfileScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={ResourcesNamesList.BOOKING}
                  component={BookingScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
        </GestureHandlerRootView>
      </Provider>
    );
  }
  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
