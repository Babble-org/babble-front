import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Stack from "./Stack";

const RootStack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="BottomTabs" component={BottomTabs} />
        <RootStack.Screen name="Stack" component={Stack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
