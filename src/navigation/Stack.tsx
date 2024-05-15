import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "../components/screens/register/StartPage";
import InviteCodePage from "../components/screens/register/InviteCodePage";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="StartPage" component={StartPage} />
      <NativeStack.Screen name="InviteCodePage" component={InviteCodePage} />
    </NativeStack.Navigator>
  );
};

export default Stack;
