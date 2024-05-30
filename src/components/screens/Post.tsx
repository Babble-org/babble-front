import styled from "styled-components/native";
import colors from "../../utils/color";
import DetailHeader from "../blocks/headers/DetailHeader";
import BottomTabBar from "../blocks/BottomTabBar";
import PostBox from "../blocks/PostBox";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import api from "../../utils/api";

const Container = styled.View`
  flex: 1;
  background-color: ${colors.White};
`;
const ContentContainer = styled.View`
  flex: 1;
`;

const Post = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [imageData, setImageData] = useState<object[] | null>(null);

  const sendBtnOnPress = async () => {
    imageData?.map(async (data: any) => {
      if (data !== undefined) {
        // 이미지의 타입으로 presignedURL 요청
        const presignedURL = await api.getPresignedURL(data.type);
        console.log(presignedURL.path);
        try {
          // presignedURL을 이용해 이미지 업로드
          const response = await FileSystem.uploadAsync(
            presignedURL.url,
            data.uri,
            {
              fieldName: data.name,
              httpMethod: "PUT",
              uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
            }
          );
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  return (
    <Container>
      <DetailHeader title="게시" />
      <ContentContainer>
        <PostBox isRecording={isRecording} setImageData={setImageData} />
      </ContentContainer>
      <BottomTabBar
        isPostMode={true}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        sendBtnOnPress={sendBtnOnPress}
      />
    </Container>
  );
};

export default Post;
