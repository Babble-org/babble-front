import styled from "styled-components/native";
import { BabbProps } from "../../utils";
import { Shadow } from "react-native-shadow-2";
import colors from "../../utils/color";
import SmallButton from "../atoms/SmallButton";
import Icon from "../../utils/icon";
import ImageViewer from "./ImageViewer";
import BabbMenu from "./BabbMenu";
import { useState } from "react";

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

const Babb = ({ nick_name, content, inserted_at, img }: BabbProps) => {
  // 작성시간을 n분전으로 표시하는 함수.
  const elapsedTime = (date: number): string => {
    const start = new Date(date);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return "방금 전";

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
  };
  const [visible, setVisible] = useState(false);

  return (
    <BabbContainer>
      <ProfileView>
        <Profile></Profile>
      </ProfileView>
      <ContentView>
        <Shadow style={{ width: "100%", borderRadius: 10 }}>
          <ContentWrap>
            <UpperWrap>
              <UpperLeftWrap>
                <NickNameText>{nick_name}</NickNameText>
                <TimeText>
                  {elapsedTime(new Date(inserted_at).getTime())}
                </TimeText>
              </UpperLeftWrap>
              <UpperRightWrap>
                {/* TODO:팔로우가 돼있거나 자신 글이면 버튼 띄우지 말기 */}
                <SmallButton text="팔로우"></SmallButton>
                <MoreBtn onPress={() => setVisible(true)}>
                  <Icon.MoreIcon size={20} color={colors.Gray}></Icon.MoreIcon>
                </MoreBtn>
              </UpperRightWrap>
            </UpperWrap>
            <LowerWrap>
              <ContentText>{content}</ContentText>
              <ImageViewer img={img}></ImageViewer>
            </LowerWrap>
          </ContentWrap>
        </Shadow>
      </ContentView>
      <BabbMenu visible={visible} setVisible={setVisible} />
    </BabbContainer>
  );
};

export default Babb;
