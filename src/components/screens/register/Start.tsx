import styled from "styled-components/native";
import Icon from "../../../utils/icon";
import LargeButton from "../../atoms/LargeButton";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const UpperSection = styled.View`
  flex: 0.85;
  justify-content: center;
`;
const LowerSection = styled.View`
  flex: 0.15;
  justify-content: flex-start;
`;
const LogoBox = styled.View``;
const BtnBox = styled.View``;

const Start = ({ navigation }: { navigation: any }) => {
  return (
    <Container>
      <UpperSection>
        <LogoBox>
          <Icon.BabbleIcon width={150} height={150} />
          <Icon.BabbleText width={160} height={100} />
        </LogoBox>
      </UpperSection>
      <LowerSection>
        <BtnBox>
          <LargeButton
            text={"휴대폰 번호로 계속하기"}
            onPress={() => navigation.navigate("InviteCodePage")}
          />
        </BtnBox>
      </LowerSection>
    </Container>
  );
};

export default Start;
