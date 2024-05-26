import styled from "styled-components/native";
import Icon from "../../../utils/icon";
import { useContext } from "react";
import { InsetsContext } from "../../../utils/context";
import { Insets, MainHeaderProps } from "../../../utils";

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: ${(props: { insets: Insets }) => props.insets.top}px;
  height: 60px;
  padding: 0 25px;
`;
const LogoBox = styled.View`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;
const LogoBtn = styled.Pressable``;
const LogoBtnOpacity = styled.TouchableOpacity``;

const MainHeader = ({
  mainLogoOnPress,
  postOnPress,
  menuOnPress,
}: MainHeaderProps) => {
  const { insets } = useContext(InsetsContext);

  return (
    <HeaderContainer insets={insets}>
      <LogoBox>
        <LogoBtnOpacity onPress={menuOnPress}>
          <Icon.MenuIcon size={30} color={"#000"} />
        </LogoBtnOpacity>
      </LogoBox>
      <LogoBox>
        <LogoBtn onPress={mainLogoOnPress}>
          <Icon.BabbleIcon height={50} width={50} color={"#000"} />
        </LogoBtn>
      </LogoBox>
      <LogoBox>
        <LogoBtnOpacity onPress={postOnPress}>
          <Icon.PlusIcon size={33} color={"#000"} />
        </LogoBtnOpacity>
      </LogoBox>
    </HeaderContainer>
  );
};

export default MainHeader;
