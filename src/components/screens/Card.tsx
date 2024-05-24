import { BabbProps, CommentProps } from "../../utils";
import styled from "styled-components/native";
import Babb from "../blocks/Babb";
import { Dimensions } from "react-native";
import BabbInfo from "../blocks/BabbInfo";
import Comment from "../blocks/Comment";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width}px;
`;
const ContentContainer = styled.FlatList``;
const FooterComponent = styled.View`
  height: 25px;
`;

const Card = ({ babb }: { babb: BabbProps }) => {
  return (
    <Container>
      <ContentContainer
        data={babb.comment}
        ListHeaderComponent={() => (
          <>
            <Babb
              key={babb.id}
              nick_name={babb.nick_name}
              content={babb.content}
              inserted_at={babb.inserted_at}
              img={babb.img}
            />
            <BabbInfo></BabbInfo>
          </>
        )}
        ListFooterComponent={() => <FooterComponent />}
        KeyExtractor={(item: CommentProps) => item.id}
        renderItem={({ item: babb }: { item: CommentProps }) => {
          return (
            <Comment
              id={babb.id}
              nick_name={babb.nick_name}
              content={babb.content}
              inserted_at={babb.inserted_at}
              img={babb.img}
              n_comment={babb.n_comment}
            />
          );
        }}
      />
    </Container>
  );
};
export default Card;
