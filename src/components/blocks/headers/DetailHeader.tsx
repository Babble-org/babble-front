import styled from "styled-components/native";
import { useContext } from "react";
import { InsetsContext } from "../../../utils/context";
import { Insets } from "../../../utils";
import Icon from "../../../utils/icon";
import { useNavigation } from "@react-navigation/native";

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: ${(props: { insets: Insets }) => props.insets.top}px;
  height: 60px;
  padding: 0 20px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: black;
`;
const IconWrap = styled.View`
  width: 30px;
  height: 30px;
`;
const IconBtn = styled.TouchableOpacity``;

const DetailHeader = ({ title }: { title: string }) => {
  const { insets } = useContext(InsetsContext);
  const navigation = useNavigation<any>();

  return (
    <HeaderContainer insets={insets}>
      <IconWrap>
        <IconBtn onPress={() => navigation.goBack()}>
          <Icon.BackIcon size={30} color="black"></Icon.BackIcon>
        </IconBtn>
      </IconWrap>
      <Title>{title}</Title>
      <IconWrap />
    </HeaderContainer>
  );
};

export default DetailHeader;
