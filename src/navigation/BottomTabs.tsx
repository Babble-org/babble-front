import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/screens/Home";
import BottomTabBar from "../components/blocks/BottomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={() => <BottomTabBar></BottomTabBar>}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
