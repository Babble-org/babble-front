import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../components/screens/register/Start";
import InviteCode from "../components/screens/register/InviteCode";
import SMSAuth from "../components/screens/register/SMSAuth";
import Register from "../components/screens/register/Register";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="StartPage" component={Start} />
      <NativeStack.Screen name="InviteCodePage" component={InviteCode} />
      <NativeStack.Screen name="SMSAuth" component={SMSAuth} />
      <NativeStack.Screen name="Register" component={Register} />
    </NativeStack.Navigator>
  );
};

export default Stack;
