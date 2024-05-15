import styled from "styled-components/native";
import RegisterHeader from "../../blocks/headers/RegisterHeader";
import InputBox from "../../atoms/InputBox";
import MediumButton from "../../atoms/MediumButton";
import { useEffect, useState } from "react";
import userApi from "../../../utils/api";

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
const ValidateText = styled.Text`
  color: #a0a0a0;
`;

const Register = ({ navigation }: { navigation: any }) => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isIdAvailable, setIsIdAvailable] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<number>(0);
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(false);

  // 아이디 중복 체크
  useEffect(() => {
    const checkId = async () => {
      if (id.length > 1) {
        const isIdAvailable = await userApi.check_username(id);
        setIsIdAvailable(isIdAvailable);
      }
    };
    checkId();
  }, [id]);

  useEffect(() => {
    setPasswordValid(validatePassword(password));
  }, [password]);

  useEffect(() => {
    setIsPasswordMatched(password === passwordCheck);
  }, [passwordCheck]);

  // 비밀번호 유효성 검사
  const validatePassword = (password: string): number => {
    if (!password) {
      return 0;
    }
    // 패스워드 길이 확인
    if (password.length < 8) {
      return 1;
    }
    // 대문자, 소문자, 숫자, 특수 문자 확인
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (!hasUpperCase) {
      return 2;
    }
    if (!hasLowerCase) {
      return 3;
    }
    if (!hasNumber) {
      return 4;
    }
    if (!hasSpecialChar) {
      return 5;
    }
    // 모든 검사를 통과한 경우
    return 0;
  };

  return (
    <Container>
      <RegisterHeader></RegisterHeader>
      <ContentWrap>
        <Text>새로운 계정 만들기</Text>
        <InputBox
          placeholder={"아이디"}
          onChangeText={setId}
          value={id}
        ></InputBox>
        {id && id.length < 4 ? (
          <ValidateText>아이디는 최소 4글자 이상이어야 합니다.</ValidateText>
        ) : !isIdAvailable ? (
          <ValidateText>아이디가 유효하지 않습니다.</ValidateText>
        ) : null}
        <InputBox
          placeholder={"비밀번호"}
          onChangeText={setPassword}
          value={password}
        ></InputBox>
        {passwordValid != 0 && (
          <ValidateText>
            {passwordValid === 1
              ? "패스워드는 최소 8자 이상이어야 합니다."
              : passwordValid === 2
                ? "패스워드는 최소 하나의 대문자를 포함해야 합니다."
                : passwordValid === 3
                  ? "패스워드는 최소 하나의 소문자를 포함해야 합니다."
                  : passwordValid === 4
                    ? "패스워드는 최소 하나의 숫자를 포함해야 합니다."
                    : passwordValid === 5
                      ? "패스워드는 최소 하나의 특수 문자를 포함해야 합니다."
                      : null}
          </ValidateText>
        )}
        <InputBox
          placeholder={"비밀번호 확인"}
          onChangeText={setPasswordCheck}
          value={passwordCheck}
        ></InputBox>
        {!isPasswordMatched && passwordCheck && (
          <ValidateText>비밀번호가 맞지 않습니다.</ValidateText>
        )}
        <InputBox
          placeholder={"이름"}
          onChangeText={setName}
          value={name}
        ></InputBox>
        <InputBox placeholder={"생년월일"}></InputBox>
        <InputBox placeholder={"성별"}></InputBox>
        <BtnContainer>
          <MediumButton
            text={"다음"}
            onPress={() =>
              navigation.navigate("BottomTabs", { screen: "Home" })
            }
          />
        </BtnContainer>
      </ContentWrap>
    </Container>
  );
};

export default Register;
