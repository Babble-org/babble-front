import styled from "styled-components/native";
import { MenuProps } from "../../utils";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useContext, useEffect, useState } from "react";
import colors from "../../utils/color";
import { InsetsContext } from "../../utils/context";
import Icon from "../../utils/icon";
import { useNavigation } from "@react-navigation/native";

const Container = styled.Modal`
  opacity: 0.5;
`;
const ModalContainer = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
`;
const AnimatedMenuContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  padding: 0px 20px;
`;
const ProfileContainer = styled.View`
  flex-direction: column;
  margin-top: ${(props: { inset: number }) => props.inset + 10}px;
`;
const ProfileImage = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
`;
const ProfileText = styled.Text`
  font-size: 22px;
  font-weight: 800;
  margin-top: 10px;
`;
const InfoText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.Gray};
  margin-top: 5px;
`;
const FollowBoldText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-right: 3px;
`;
const FollowText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.Gray};
  margin-right: 15px;
`;
const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
const NavContainer = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;
const NavBtn = styled.TouchableOpacity`
  margin: 15px 0;
`;
const MenuText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-left: 30px;
`;

const Menu = ({ visible, setVisible }: MenuProps) => {
  const { insets } = useContext(InsetsContext);
  const translateX = useSharedValue(-300);
  const [modalClose, setModalClose] = useState(false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  const nav = useNavigation<any>();

  useEffect(() => {
    if (visible) {
      translateX.value = withTiming(0, { duration: 300 });
    }
    if (modalClose) {
      translateX.value = withTiming(-300, { duration: 300 });
      setTimeout(() => {
        setVisible(false);
        setModalClose(false);
      }, 50);
    }
  }, [visible, translateX, modalClose]);

  return (
    <Container visible={visible} transparent animationType="fade">
      <ModalContainer onPress={() => setModalClose(true)}></ModalContainer>
      <AnimatedMenuContainer style={animatedStyle}>
        <ProfileContainer inset={insets.top}>
          <ProfileImage></ProfileImage>
          <ProfileText>박건태</ProfileText>
          <InfoText>@pgt258258</InfoText>
          <RowBox style={{ marginTop: 10 }}>
            <FollowBoldText>207</FollowBoldText>
            <FollowText>팔로잉</FollowText>
            <FollowBoldText>189</FollowBoldText>
            <FollowText>팔로워</FollowText>
          </RowBox>
        </ProfileContainer>
        <NavContainer>
          <NavBtn
            onPress={() => {
              nav.navigate("Stack", { screen: "Profile" });
              setModalClose(true);
            }}
          >
            <RowBox>
              <Icon.ProfileIcon width={22} height={22}></Icon.ProfileIcon>
              <MenuText>프로필</MenuText>
            </RowBox>
          </NavBtn>
          <NavBtn>
            <RowBox>
              <Icon.SearchIcon size={22}></Icon.SearchIcon>
              <MenuText>검색</MenuText>
            </RowBox>
          </NavBtn>
          <NavBtn>
            <RowBox>
              <Icon.SettingIcon size={22}></Icon.SettingIcon>
              <MenuText>설정</MenuText>
            </RowBox>
          </NavBtn>
        </NavContainer>
      </AnimatedMenuContainer>
    </Container>
  );
};

export default Menu;
