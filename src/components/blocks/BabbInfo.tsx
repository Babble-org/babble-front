import styled from "styled-components/native";
import colors from "../../utils/color";
import Icon from "../../utils/icon";
import { useContext } from "react";
import { FocusContext } from "../../utils/context";
import { useNavigation } from "@react-navigation/native";

const InfoContainer = styled.View`
  margin: 10px 0;
  align-self: center;
  width: 95%;
  height: 70px;
  border: 1px solid ${colors.disabled};
  border-left-width: 0;
  border-right-width: 0;
`;
const BtnWrap = styled.View`
  flex: 1;
  border: 1px solid ${colors.disabled};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  flex-direction: row;
  align-items: center;
`;
const InfoWrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Btn = styled.TouchableOpacity`
  margin: 0px 10px;
`;
const InfoText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin: 0px 10px;
`;

const BabbInfo = ({ id, length }: { id: number; length: number }) => {
  const nav = useNavigation<any>();
  return (
    <InfoContainer>
      <BtnWrap>
        <Btn
          onPress={() =>
            nav.navigate("Stack", { screen: "Post", params: { id } })
          }
        >
          <Icon.ChatBoxIcon size={25} outline={true} />
        </Btn>
        <Btn>
          <Icon.HeartIcon size={25} outline={true} />
        </Btn>
      </BtnWrap>
      <InfoWrap>
        <InfoText>댓글 {length}</InfoText>
        <InfoText>좋아요 0</InfoText>
      </InfoWrap>
    </InfoContainer>
  );
};

export default BabbInfo;
