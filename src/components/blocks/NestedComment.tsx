import styled from "styled-components/native";
import { BabbProps, NestedCommentProps } from "../../utils";
import { Shadow } from "react-native-shadow-2";
import colors from "../../utils/color";
import SmallButton from "../atoms/SmallButton";
import Icon from "../../utils/icon";
import ImageViewer from "./ImageViewer";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { useEffect, useState } from "react";

const BabbContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px 0;
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
const ContentView = styled.Pressable`
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
const InfoBtn = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 10px;
`;
const InfoWrap = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
const InfoText = styled.Text`
  font-size: 14px;
  color: ${colors.Gray};
  margin-left: 3px;
`;

const NestedComment = ({
  author_id,
  nick_name,
  content,
  inserted_at,
  img,
}: NestedCommentProps | any) => {
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

  const { data, isLoading } = useQuery({
    queryKey: ["userInfo", author_id],
    queryFn: () => api.getUserInfo(author_id),
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [shadowValue, setShadowValue] = useState(10);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const id = setInterval(() => {
        setShadowValue((prev) => {
          if (prev < 18) {
            return prev + 0.7;
          } else {
            clearInterval(id);
            return 18;
          }
        });
      }, 1); // 0.1초마다 업데이트
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setShadowValue(10);
    }
  }, [isPlaying]);

  return (
    <BabbContainer>
      <ProfileView>
        <Profile></Profile>
      </ProfileView>
      <ContentView onPress={() => setIsPlaying((prev) => !prev)}>
        <Shadow
          style={{ width: "100%", borderRadius: 10 }}
          distance={shadowValue}
        >
          <ContentWrap>
            <UpperWrap>
              <UpperLeftWrap>
                <NickNameText>{data && data.nick_name}</NickNameText>
                <TimeText>
                  {elapsedTime(new Date(inserted_at).getTime())}
                </TimeText>
              </UpperLeftWrap>
              <UpperRightWrap>
                <MoreBtn>
                  <Icon.MoreIcon size={20} color={colors.Gray}></Icon.MoreIcon>
                </MoreBtn>
              </UpperRightWrap>
            </UpperWrap>
            <LowerWrap>
              <ContentText>{content}</ContentText>
              <ImageViewer img={img}></ImageViewer>
              <InfoWrap>
                <InfoBtn>
                  <Icon.HeartIcon
                    size={15}
                    outline={true}
                    color={colors.Gray}
                  />
                  <InfoText>3</InfoText>
                </InfoBtn>
              </InfoWrap>
            </LowerWrap>
          </ContentWrap>
        </Shadow>
      </ContentView>
    </BabbContainer>
  );
};

export default NestedComment;
