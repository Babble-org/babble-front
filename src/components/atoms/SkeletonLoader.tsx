import styled from "styled-components/native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../utils/color";
import { Shadow } from "react-native-shadow-2";
import Icon from "../../utils/icon";
import BabbInfo from "../blocks/BabbInfo";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const Container = styled.View`
  flex: 1;
`;

const BabbContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px 20px;
`;
const ProfileView = styled.View`
  width: 50px;
`;
const Profile = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #000;
`;
const ContentView = styled.View`
  flex: 1;
  margin-left: 10px;
`;
const ContentWrap = styled.View`
  margin: 10px 10px;
`;
const NickNameText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;
const ContentText = styled.Text`
  font-size: 15px;
`;
const TimeText = styled.Text`
  font-size: 12px;
  color: ${colors.Gray};
`;
const UpperWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const LowerWrap = styled.View``;
const UpperLeftWrap = styled.View`
  flex-direction: row;
`;
const UpperRightWrap = styled.View`
  flex-direction: row;
`;
const MoreBtn = styled.TouchableOpacity`
  margin-left: 10px;
`;

const SkeletonLoader = () => {
  return (
    <Container>
      <BabbContainer>
        <ProfileView>
          <ShimmerPlaceHolder
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </ProfileView>
        <ContentView>
          <Shadow style={{ width: "100%", borderRadius: 10 }}>
            <ContentWrap>
              <UpperWrap>
                <UpperLeftWrap>
                  <ShimmerPlaceHolder style={{ width: 100, height: 20 }} />
                  <ShimmerPlaceHolder
                    style={{ width: 50, height: 15, marginLeft: 10 }}
                  />
                </UpperLeftWrap>
                <UpperRightWrap>
                  <MoreBtn>
                    <Icon.MoreIcon
                      size={20}
                      color={colors.Gray}
                    ></Icon.MoreIcon>
                  </MoreBtn>
                </UpperRightWrap>
              </UpperWrap>
              <LowerWrap>
                <ShimmerPlaceHolder style={{ width: "100%", height: 20 }} />
                <ShimmerPlaceHolder
                  style={{ width: "100%", height: 20, marginTop: 5 }}
                />
              </LowerWrap>
            </ContentWrap>
          </Shadow>
        </ContentView>
      </BabbContainer>
      <BabbInfo />
    </Container>
  );
};

export default SkeletonLoader;
