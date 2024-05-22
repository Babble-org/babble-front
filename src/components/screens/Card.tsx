import { BabbProps } from "../../utils";
import styled from "styled-components/native";
import Babb from "../blocks/Babb";
import { Dimensions } from "react-native";
import BabbInfo from "../blocks/BabbInfo";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width}px;
`;
const ContentContainer = styled.FlatList``;
const Footer = styled.View`
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
        ListFooterComponent={() => <Footer />}
        renderItem={({ item: babb }: { item: BabbProps }) => {
          return (
            <Babb
              key={babb.id}
              nick_name={babb.nick_name}
              content={babb.content}
              inserted_at={babb.inserted_at}
              img={babb.img}
            />
          );
        }}
      />
    </Container>
  );
};
export default Card;
