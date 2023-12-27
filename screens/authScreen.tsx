import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from "react-native-tab-view";
import { Colors, Dimisions } from "../branding";
import LogoIcon from "../assets/icons/logo";
import { Login } from "../auth";
import Signup from "../auth/signup/signup";
import { SafeAreaView } from "react-native-safe-area-context";

interface TabNavigationData {
  key: string;
  title: string;
}
const renderTabBar = (
  props: SceneRendererProps & {
    navigationState: NavigationState<TabNavigationData>;
  },
) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={focused ? styles.activeTabBarText : styles.inActiveTabBarText}
      >
        {route.title}
      </Text>
    )}
  />
);

const renderScene = SceneMap({
  login: Login,
  signUp: Signup,
});
const AuthScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "login", title: "Log In" },
    { key: "signUp", title: "Sign Up" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <LogoIcon style={styles.logo} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginTop: Dimisions.primarySpacing * 2,
    marginBottom: Dimisions.primarySpacing * 4,
  },
  activeTabBarText: {
    fontSize: 20,
    fontFamily: "app-font-bold",
    color: Colors.title,
  },
  inActiveTabBarText: {
    fontSize: 20,
    fontFamily: "app-font-bold",
    color: Colors.grey,
  },
  tabBar: {
    backgroundColor: Colors.background,
  },
  indicator: {
    backgroundColor: Colors.praimary,
  },
});
export default AuthScreen;
