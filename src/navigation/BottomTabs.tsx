import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/screens/Home";
import BottomTabBar from "../components/blocks/BottomTabBar";
import Search from "../components/screens/Search";
import Notification from "../components/screens/Notification";
import Message from "../components/screens/Message";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={() => <BottomTabBar></BottomTabBar>}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
