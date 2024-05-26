import styled from "styled-components/native";
import colors from "../../utils/color";
import DetailHeader from "../blocks/headers/DetailHeader";
import BottomTabBar from "../blocks/BottomTabBar";
import PostBox from "../blocks/PostBox";
import { useState } from "react";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.White};
`;
const ContentContainer = styled.View`
  flex: 1;
`;

const Post = () => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <Container>
      <DetailHeader title="게시" />
      <ContentContainer>
        <PostBox isRecording={isRecording} />
      </ContentContainer>
      <BottomTabBar
        isPostMode={true}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
      />
    </Container>
  );
};

export default Post;
