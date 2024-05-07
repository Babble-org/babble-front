import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/screens/Home";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Home" component={Home} />
    </NativeStack.Navigator>
  );
};

export default Stack;
