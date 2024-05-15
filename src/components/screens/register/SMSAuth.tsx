import styled from "styled-components/native";
import RegisterHeader from "../../blocks/headers/RegisterHeader";
import InputBox from "../../atoms/InputBox";
import MediumButton from "../../atoms/MediumButton";
import { useEffect, useState } from "react";

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
const AuthBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InputWrap = styled.View`
  flex: 0.65;
`;
const BtnWrap = styled.View`
  flex: 0.3;
`;
const TimeText = styled.Text`
  color: #a0a0a0;
  align-self: flex-end;
  margin-right: 10px;
`;

const SMSAuth = ({ navigation }: { navigation: any }) => {
  const [isSmsSend, setIsSmsSend] = useState<boolean>(false);
  const [time, setTime] = useState(5 * 60); // 초 단위로 5분 설정

  useEffect(() => {
    if (isSmsSend && time > 0) {
      const timerId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
    if (time === 0) {
      setIsSmsSend(false);
      setTime(5 * 60);
    }
  }, [isSmsSend, time]);

  const sendBtnOnClick = () => {
    setIsSmsSend(true);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <Container>
      <RegisterHeader></RegisterHeader>
      <ContentWrap>
        <Text>휴대폰 번호 인증하기</Text>
        <AuthBox>
          <InputWrap>
            <InputBox placeholder={"휴대폰 번호 입력"}></InputBox>
          </InputWrap>
          <BtnWrap>
            <MediumButton
              text={isSmsSend ? "인증번호 재발송" : "인증번호 받기"}
              fontSize={14}
              onPress={sendBtnOnClick}
            ></MediumButton>
          </BtnWrap>
        </AuthBox>
        <InputBox placeholder={"인증번호 입력"} enable={isSmsSend}></InputBox>
        {isSmsSend ? (
          <TimeText>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</TimeText>
        ) : null}
        <BtnContainer>
          <MediumButton
            text={"다음"}
            onPress={() => navigation.navigate("Register")}
            enable={isSmsSend}
          />
        </BtnContainer>
      </ContentWrap>
    </Container>
  );
};

export default SMSAuth;
