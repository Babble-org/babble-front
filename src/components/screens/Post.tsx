import styled from "styled-components/native";
import colors from "../../utils/color";
import DetailHeader from "../blocks/headers/DetailHeader";
import BottomTabBar from "../blocks/BottomTabBar";
import PostBox from "../blocks/PostBox";
import { useContext, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import api from "../../utils/api";
import { FocusContext } from "../../utils/context";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import Babb from "../blocks/Babb";

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
  const [n_comment, setN_comment] = useState<any>();
  let babbObj: any = {
    images: [],
    text: "",
    links: [],
    mentioned_users: [],
    mike_id: "",
  };
  const route = useRoute();
  const [id, setId] = useState<any>(null);
  useEffect(() => {
    if (route.params) {
      const { id, author_id, content, inserted_at } = route.params as any;
      if (id) {
        setId(id);
      } else {
        setN_comment({
          author_id,
          content,
          inserted_at,
        });
      }
    }
  }, [route]);

  const { data, isLoading } = useQuery({
    queryKey: ["babbData", id],
    queryFn: () => api.getBabbInfo(id),
    enabled: !!id,
  });

  const sendBtnOnPress = async () => {
    imageData?.map(async (data: any) => {
      if (data !== undefined) {
        // 이미지의 타입으로 presignedURL 요청
        const presignedURL = await api.getPresignedURL(data.type);

        babbObj.images.push({
          category: "babb_images",
          file_type: data.type,
          path: presignedURL.path,
        });
        try {
          // presignedURL을 이용해 이미지 업로드
          // const response = await FileSystem.uploadAsync(
          //   presignedURL.url,
          //   data.uri,
          //   {
          //     fieldName: data.name,
          //     httpMethod: "PUT",
          //     uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
          //   }
          // );
          console.log("presignedURL 응답:");
          //console.log(response);
        } catch (err) {
          console.log("에러 1");
          console.log(err);
        }
      }
    });
    babbObj.mike_id = 123321312;
    babbObj.text =
      "테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1테스트1 테스트1";
    //console.log(babbObj);
    const response = await api.uploadeBabb(babbObj);
    console.log("게시물 응답:");
    console.log(response);
  };

  return (
    <Container>
      <DetailHeader title="게시" />
      {data && (
        <Babb
          author_id={data.author_id}
          nick_name={data && data.nick_name}
          content={data.text}
          inserted_at={data.inserted_at}
          img={data.images}
        />
      )}
      {n_comment && (
        <Babb
          author_id={n_comment.author_id}
          content={n_comment.content}
          inserted_at={n_comment.inserted_at}
        />
      )}
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
