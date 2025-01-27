import styled from "styled-components/native";
import colors from "../../utils/color";
import DetailHeader from "../blocks/headers/DetailHeader";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { BabbProps } from "../../utils";
import Babb from "../blocks/Babb";
import { useEffect, useState } from "react";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.White};
`;
const ProfileInfoContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;
const ProfileImageWrap = styled.View`
  margin-right: 20px;
`;
const ProfileImage = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: black;
`;
const ProfileInfoWrap = styled.View`
  flex-direction: column;
`;
const NameText = styled.Text`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 5px;
`;
const InfoText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.Gray};
  margin-bottom: 10px;
`;
const FollowBoldText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-right: 3px;
`;
const FollowText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.Gray};
  margin-right: 15px;
`;
const FollowBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Separator = styled.View`
  margin-top: 20px;
  padding: 10px 10px;
  width: 80%;
  align-self: center;
  border: 1px solid ${colors.disabled};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;
const ContentContainer = styled.FlatList``;
const FooterComponent = styled.View`
  height: 25px;
`;
const Profile = () => {
  const { data: userData } = useQuery({
    queryKey: ["getProfile"],
    queryFn: api.getProfile,
  });
  const [id, setId] = useState<number>(0);

  const { data, isLoading } = useQuery({
    queryKey: ["getUserFeed", 1],
    queryFn: () => api.getUserFeed(1),
    enabled: !!id,
  });

  useEffect(() => {
    if (userData) {
      setId(userData.id);
    }
  }, [userData]);
  return (
    <Container>
      <DetailHeader title="@pgt258258"></DetailHeader>
      <ProfileInfoContainer>
        <ProfileImageWrap>
          <ProfileImage></ProfileImage>
        </ProfileImageWrap>
        <ProfileInfoWrap>
          <NameText>박건태</NameText>
          <InfoText>@pgt258258</InfoText>
          <FollowBox>
            <FollowBoldText>207</FollowBoldText>
            <FollowText>팔로잉</FollowText>
            <FollowBoldText>189</FollowBoldText>
            <FollowText>팔로워</FollowText>
          </FollowBox>
        </ProfileInfoWrap>
      </ProfileInfoContainer>
      <Separator>
        <FollowBoldText style={{ fontSize: 20 }}>게시물</FollowBoldText>
      </Separator>
      {data && (
        <ContentContainer
          data={data}
          renderItem={({ item: babb }: { item: any }) => (
            <Babb
              key={babb.author_id}
              author_id={babb.author_id}
              content={babb.text}
              inserted_at={babb.inserted_at}
              img={babb.images}
            />
          )}
          ListFooterComponent={() => <FooterComponent />}
        />
      )}
    </Container>
  );
};

export default Profile;
