import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "../../../utils/icon";

interface Insets {
  bottom: number;
  top: number;
  left: number;
  right: number;
}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
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

const RegisterHeader = () => {
  const insets: Insets = useSafeAreaInsets();

  return (
    <HeaderContainer insets={insets}>
      <LogoBox>
        <Icon.BabbleIcon height={50} width={50} color={"#000"} />
      </LogoBox>
    </HeaderContainer>
  );
};

export default RegisterHeader;
