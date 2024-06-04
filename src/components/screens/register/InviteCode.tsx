import styled from "styled-components/native";
import RegisterHeader from "../../blocks/headers/RegisterHeader";
import InputBox from "../../atoms/InputBox";
import MediumButton from "../../atoms/MediumButton";
import { useState } from "react";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 30px;
`;
const ContentWrap = styled.View`
  margin-top: 20px;
`;
const Text = styled.Text`
  font-size: 25px;
  font-weight: 800;
`;
const BtnContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
const InviteCode = ({ navigation }: { navigation: any }) => {
  const [id, setId] = useState<string>("");
  return (
    <Container>
      <RegisterHeader></RegisterHeader>
      <ContentWrap>
        <Text>초대코드 입력하기</Text>
        <InputBox
          placeholder={"초대코드 입력"}
          onChangeText={setId}
          value={id}
        ></InputBox>
        <BtnContainer>
          <MediumButton
            text={"다음"}
            onPress={() => navigation.navigate("Register")}
            enable={id !== ""}
          />
        </BtnContainer>
      </ContentWrap>
    </Container>
  );
};

export default InviteCode;
