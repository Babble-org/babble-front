import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/screens/Home";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
