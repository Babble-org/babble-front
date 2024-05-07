import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "../../../utils/icon";

interface Insets {
  bottom: number;
  top: number;
  left: number;
  right: number;
}

interface MainHeaderProps {
  mainLogoOnPress: void;
  profileOnPress: void;
}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: ${(props: { insets: Insets }) => props.insets.top}px;
  height: 60px;
  padding: 0 20px;
`;
const LogoBox = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
const LogoBtn = styled.Pressable``;
const LogoBtnOpacity = styled.TouchableOpacity``;

const MainHeader = ({ mainLogoOnPress, profileOnPress }: MainHeaderProps) => {
  // SafeAreaInsets를 가져와 HeaderContainer에 적용.
  const insets: Insets = useSafeAreaInsets();

  return (
    <HeaderContainer insets={insets}>
      <LogoBox>{/**TODO: 비우기 or 설정 넣기**/}</LogoBox>
      <LogoBox>
        <LogoBtn onPress={mainLogoOnPress}>
          <Icon.BabbleIcon height={50} width={50} color={"#000"} />
        </LogoBtn>
      </LogoBox>
      <LogoBox>
        <LogoBtnOpacity onPress={profileOnPress}>
          <Icon.ProfileIcon height={25} width={25} color={"#000"} />
        </LogoBtnOpacity>
      </LogoBox>
    </HeaderContainer>
  );
};

export default MainHeader;