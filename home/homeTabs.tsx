import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import {
  SceneRendererProps,
  NavigationState,
  TabBar,
  SceneMap,
  TabView,
} from "react-native-tab-view";
import { Colors, Dimisions } from "../branding";
import { Text } from "@ui-kitten/components";
import { RecomendList } from "./recommend";
import { PopularList } from "./popular";
import { TrendingList } from "./trending";
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
  recommend: RecomendList,
  popular: PopularList,
  trending: TrendingList,
});
const HomeTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "recommend", title: "Recommend" },
    { key: "popular", title: "Popular" },
    { key: "trending", title: "Trending" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
    />
  );
};
const styles = StyleSheet.create({
  activeTabBarText: {
    fontSize: 17,
    color: Colors.title,
  },
  inActiveTabBarText: {
    fontSize: 18,
    fontFamily: "app-font",
    color: Colors.grey,
  },
  tabBar: {
    backgroundColor: Colors.background,
    marginTop: Dimisions.sectionSpacing * 2,
  },
  indicator: {
    backgroundColor: Colors.praimary,
    borderBottomColor: Colors.background,
    width: 7,
    height: 7,
    borderRadius: 7,
    marginLeft: Dimisions.primarySpacing * 6,
  },
});

export default HomeTabs;
