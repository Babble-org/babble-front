import { BabbProps, CommentProps } from "../../utils";
import styled from "styled-components/native";
import Babb from "../blocks/Babb";
import { Dimensions } from "react-native";
import BabbInfo from "../blocks/BabbInfo";
import Comment from "../blocks/Comment";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width}px;
  background-color: #fff;
  height: 86%;
`;
const ContentContainer = styled.FlatList``;
const FooterComponent = styled.View`
  height: 25px;
`;

const Card = ({ babb }: { babb: any }) => {
  // const commentData = babb.comments.reduce((acc, comment) => {
  //   // 대댓글을 찾습니다.
  //   const replies = babb.comments.filter(
  //     (c) => c.parent_comment_id === comment.id
  //   );

  //   // 새로운 댓글 오브젝트를 만들고 대댓글을 포함시킵니다.
  //   const newComment = { ...comment, replies };

  //   return [...acc, newComment];
  // }, []);

  const commentData = babb.comments.reduce((acc: any, comment: any) => {
    // 대댓글이 아닌 경우만 처리합니다.
    if (comment.parent_comment_id == null) {
      // 대댓글을 찾습니다.
      const replies = babb.comments.filter(
        (c: any) => c.parent_comment_id === comment.id
      );

      // 새로운 댓글 오브젝트를 만들고 대댓글을 포함시킵니다.
      const newComment = { ...comment, replies };

      return [...acc, newComment];
    }

    // 대댓글인 경우 이전 accumulator를 반환합니다.
    return acc;
  }, []);

  return (
    <Container>
      <ContentContainer
        data={commentData}
        ListHeaderComponent={() => (
          <>
            <Babb
              key={babb.author_id}
              author_id={babb.author_id}
              content={babb.text}
              inserted_at={babb.inserted_at}
              img={babb.images}
            />
            <BabbInfo id={babb.id} length={babb.comments.length}></BabbInfo>
          </>
        )}
        ListFooterComponent={() => <FooterComponent />}
        KeyExtractor={(item: CommentProps) => item.id}
        renderItem={({ item: babb }: { item: CommentProps | any }) => {
          //console.log(babb);
          return (
            <Comment
              author_id={babb.author_id}
              id={babb.id}
              content={babb.text}
              inserted_at={babb.inserted_at}
              img={babb.img}
              n_comment={babb.replies}
            />
          );
        }}
      />
    </Container>
  );
};
export default Card;
