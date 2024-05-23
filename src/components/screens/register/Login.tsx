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
const ContentWrap = styled.ScrollView`
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
const Login = ({ navigation }: { navigation: any }) => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <RegisterHeader />
      <ContentWrap>
        <Text>로그인하기</Text>
        <InputBox placeholder="아이디" value={id} onChangeText={setId} />
        <InputBox
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
        />
        <BtnContainer>
          <MediumButton
            text="로그인"
            onPress={() =>
              navigation.navigate("BottomTabs", { screen: "Home" })
            }
            enable={id !== "" && password !== ""}
          />
        </BtnContainer>
      </ContentWrap>
    </Container>
  );
};

export default Login;
