import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Stack from "./Stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext, useEffect } from "react";
import { InsetsContext } from "../utils/context";

const RootStack = createNativeStackNavigator();

const Root = () => {
  const insets = useSafeAreaInsets();
  const { setInsets } = useContext(InsetsContext);

  useEffect(() => {
    setInsets(insets);
  }, []);

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
