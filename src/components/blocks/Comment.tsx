import styled from "styled-components/native";
import { BabbProps, CommentProps } from "../../utils";
import { Shadow } from "react-native-shadow-2";
import colors from "../../utils/color";
import Icon from "../../utils/icon";
import ImageViewer from "./ImageViewer";
import { useEffect, useState } from "react";
import NestedComment from "./NestedComment";

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
const NestedContainer = styled.View``;
const NestedInfoWrap = styled.TouchableOpacity`
  flex-direction: row;
`;

const Comment = ({
  id,
  nick_name,
  content,
  inserted_at,
  img,
  n_comment,
}: CommentProps) => {
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

  const [openNestedComment, setOpenNestedComment] = useState(false);

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
                  <Icon.ChatBoxIcon
                    size={15}
                    outline={true}
                    color={colors.Gray}
                  />
                  <InfoText>2</InfoText>
                </InfoBtn>
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
        {/* 대댓글이 있을 경우에만 렌더링 */}
        {n_comment && n_comment.length > 0 && (
          <NestedContainer>
            <NestedComment
              id={n_comment[0].id}
              nick_name={n_comment[0].nick_name}
              content={n_comment[0].content}
              inserted_at={n_comment[0].inserted_at}
              img={n_comment[0].img}
            ></NestedComment>
            {openNestedComment &&
              n_comment
                .slice(1)
                .map((comment) => (
                  <NestedComment
                    key={comment.id}
                    id={comment.id}
                    nick_name={comment.nick_name}
                    content={comment.content}
                    inserted_at={comment.inserted_at}
                    img={comment.img}
                  ></NestedComment>
                ))}
            {n_comment.length > 1 && !openNestedComment ? (
              <NestedInfoWrap onPress={() => setOpenNestedComment(true)}>
                <Icon.DownIcon size={15} color={colors.Gray}></Icon.DownIcon>
                <InfoText>답글 {n_comment.length - 1}개 더보기</InfoText>
              </NestedInfoWrap>
            ) : (
              <NestedInfoWrap onPress={() => setOpenNestedComment(false)}>
                <Icon.UpIcon size={15} color={colors.Gray}></Icon.UpIcon>
                <InfoText>답글 숨기기</InfoText>
              </NestedInfoWrap>
            )}
          </NestedContainer>
        )}
      </ContentView>
    </BabbContainer>
  );
};

export default Comment;