import styled from "styled-components/native";
import RegisterHeader from "../../blocks/headers/RegisterHeader";
import InputBox from "../../atoms/InputBox";
import MediumButton from "../../atoms/MediumButton";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../../../utils/color";
import { useQuery } from "@tanstack/react-query";
import { RegisterInfo } from "../../../utils";

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
const ValidateText = styled.Text`
  color: #a0a0a0;
`;
const PressableInput = styled.Pressable`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { opened: boolean }) =>
    props.opened ? "#5351c9" : "#d9d9d9"};
  margin: 10px 0;
`;
const Placeholder = styled.Text`
  color: #a0a0a0;
  font-size: 14px;
  margin-top: 10px;
`;
const InputText = styled(Placeholder)`
  color: #000;
`;
const GenderWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const MaleBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.Gray};
  border: ${(props: { gender: number }) =>
    props.gender == 1
      ? `7px solid ${colors.MainColor}`
      : `1px solid ${colors.Gray}`};
`;
const FemaleBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.Gray};
  border: ${(props: { gender: number }) =>
    props.gender == 0
      ? `7px solid ${colors.MainColor}`
      : `1px solid ${colors.Gray}`};
`;
const GenderText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 15px;
`;

const Register = ({ navigation }: { navigation: any }) => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isIdAvailable, setIsIdAvailable] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<number>(-1);
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(false);
  const [dateOpen, setDateOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [dateChanged, setDateChanged] = useState<boolean>(false);
  const [gender, setGender] = useState<number>(1);
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo | null>(null);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);

  const { data: registerData } = useQuery({
    queryKey: ["registerInfo", registerInfo],
    queryFn: () => api.Register(registerInfo),
    enabled: !!registerInfo,
  });
  const { data: userData } = useQuery({
    queryKey: ["userData", { user_name: id, password: password }],
    queryFn: () => api.Login({ user_name: id, password: password }),
    enabled: !!isRegisterSuccess,
  });

  useEffect(() => {
    // 회원가입이 성공하여 회원가입 데이터가 반환될 시.
    if (registerData) {
      console.log(registerData);
      setIsRegisterSuccess(true);
    }
  }, [registerData]);
  useEffect(() => {
    // 로그인이 성공하여 유저 데이터가 반환될 시.
    if (userData) {
      navigation.navigate("BottomTabs", { screen: "Home" });
    }
  }, [userData]);

  let formComplete: boolean =
    isIdAvailable &&
    isPasswordMatched &&
    passwordValid == 0 &&
    name != "" &&
    dateChanged;

  // 아이디 중복 체크
  useEffect(() => {
    const checkId = async () => {
      if (id.length >= 4) {
        //const isIdAvailable = await api.check_username(id);
        setIsIdAvailable(true);
      }
    };
    checkId();
  }, [id]);

  useEffect(() => {
    setPasswordValid(validatePassword(password));
  }, [password]);

  useEffect(() => {
    setIsPasswordMatched(password === passwordCheck);
  }, [passwordCheck, password]);

  // 비밀번호 유효성 검사
  const validatePassword = (password: string): number => {
    if (!password) {
      return -1;
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
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    const day = date.getDate();

    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  };
  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    setDateChanged(true);
    if (currentDate) {
      setDate(currentDate);
    }
  };

  const onNextBtnPress = () => {
    const registerInfo = {
      birth: formatDate(date),
      gender: gender === 1 ? "M" : "F",
      nick_name: name,
      password: password,
      user_name: id,
    };
    setRegisterInfo(registerInfo);
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
          isValidate={isIdAvailable}
          caretHidden={true}
        ></InputBox>
        {id && !isIdAvailable && (
          <ValidateText>
            {id.length < 4
              ? "아이디는 최소 4글자 이상이어야 합니다."
              : !isIdAvailable
                ? "아이디가 유효하지 않습니다."
                : null}
          </ValidateText>
        )}
        <InputBox
          placeholder={"비밀번호"}
          onChangeText={setPassword}
          value={password}
          isValidate={passwordValid === 0}
        ></InputBox>
        {password && (
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
          isValidate={isPasswordMatched}
        ></InputBox>
        {!isPasswordMatched && passwordCheck && (
          <ValidateText>비밀번호가 맞지 않습니다.</ValidateText>
        )}
        <InputBox
          placeholder={"이름"}
          onChangeText={setName}
          value={name}
        ></InputBox>
        <PressableInput
          onPress={() => setDateOpen((prev) => !prev)}
          opened={dateOpen}
        >
          {dateChanged ? (
            <InputText>{date.toLocaleDateString()}</InputText>
          ) : (
            <Placeholder>생년월일</Placeholder>
          )}
        </PressableInput>
        {dateOpen && (
          <DateTimePicker value={date} display="spinner" onChange={onChange} />
        )}
        <GenderWrap>
          <MaleBtn gender={gender} onPress={() => setGender(1)}></MaleBtn>
          <GenderText>남성</GenderText>
          <FemaleBtn gender={gender} onPress={() => setGender(0)}></FemaleBtn>
          <GenderText>여성</GenderText>
        </GenderWrap>
        <BtnContainer>
          <MediumButton
            text={"다음"}
            onPress={onNextBtnPress}
            enable={formComplete}
          />
        </BtnContainer>
      </ContentWrap>
    </Container>
  );
};

export default Register;
