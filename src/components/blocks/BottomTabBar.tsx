import styled from "styled-components/native";
import { useContext, useState } from "react";
import { InsetsContext } from "../../utils/context";
import { Insets } from "../../utils";
import Icon from "../../utils/icon";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";

const TabContainer = styled.View`
  width: 100%;
  height: ${(props: { insets: Insets }) => 60 + props.insets.bottom}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  padding-bottom: ${(props: { insets: Insets }) => props.insets.bottom}px;
`;
const LogoBox = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const MicLogoBox = styled.View`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: #fff;
  position: relative;
  top: -15px;
`;
const HideBox = styled.View`
  width: 100px;
  height: 70px;
  background-color: #fff;
  position: absolute;
  bottom: -20px;
`;
const BlueBox = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: #5351c9;
`;

const BottomTabBar = () => {
  const navigation = useNavigation();

  const [curScreen, setCurScreen] = useState("Home");
  const { insets } = useContext(InsetsContext);

  const NavigateBTnOnPress = (screenName: string) => {
    // @ts-ignore
    navigation.navigate(screenName);
    setCurScreen(screenName);
  };
  return (
    <Shadow>
      <TabContainer insets={insets}>
        <LogoBox onPress={() => NavigateBTnOnPress("Home")}>
          <Icon.HomeIcon size={35} outline={curScreen != "Home"} />
        </LogoBox>
        <LogoBox onPress={() => NavigateBTnOnPress("Search")}>
          <Icon.SearchIcon size={35} outline={curScreen != "Search"} />
        </LogoBox>
        <Shadow offset={[0, -15]} style={{ borderRadius: 35 }}>
          <MicLogoBox>
            <HideBox></HideBox>
            <BlueBox>
              <Icon.MicIcon size={40} outline={true} color={"#fff"} />
            </BlueBox>
          </MicLogoBox>
        </Shadow>
        <LogoBox onPress={() => NavigateBTnOnPress("Notification")}>
          <Icon.HeartIcon size={35} outline={curScreen != "Notification"} />
        </LogoBox>
        <LogoBox onPress={() => NavigateBTnOnPress("Message")}>
          <Icon.MailIcon size={35} outline={curScreen != "Message"} />
        </LogoBox>
      </TabContainer>
    </Shadow>
  );
};

export default BottomTabBar;
