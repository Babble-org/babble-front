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
  MainLogoPress(): void;
  ProfilePress(): void;
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
const LogoBtnOpactiy = styled.TouchableOpacity``;

const MainHeader = ({ MainLogoPress, ProfilePress }: MainHeaderProps) => {
  // SafeAreaInsets를 가져와 HeaderContainer에 적용.
  const insets: Insets = useSafeAreaInsets();

  return (
    <HeaderContainer insets={insets}>
      <LogoBox>{/**TODO: 비우기 or 설정 넣기**/}</LogoBox>
      <LogoBox>
        <LogoBtn onPress={MainLogoPress}>
          <Icon.BabbleIcon height={50} width={50} color={"#000"} />
        </LogoBtn>
      </LogoBox>
      <LogoBox>
        <LogoBtnOpactiy onPress={ProfilePress}>
          <Icon.ProfileIcon height={25} width={25} color={"#000"} />
        </LogoBtnOpactiy>
      </LogoBox>
    </HeaderContainer>
  );
};

export default MainHeader;
