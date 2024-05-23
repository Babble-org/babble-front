import { BabbProps } from "../../utils";
import styled from "styled-components/native";
import Babb from "../blocks/Babb";
import { Dimensions } from "react-native";
import BabbInfo from "../blocks/BabbInfo";
import { useContext, useState } from "react";
import { ScrollContext } from "../../utils/context";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width}px;
`;
const ContentContainer = styled.FlatList``;
const Footer = styled.View`
  height: 25px;
`;

const Card = ({ babb }: { babb: BabbProps }) => {
  const { setScrollY } = useContext(ScrollContext);
  const [scrollYState, setScrollYState] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  return (
    <Container>
      <ContentContainer
        onScroll={(e: any) => {
          //console.log(e.nativeEvent.contentOffset.y);
          // 스크롤의 변화량을 계산하여 Context에 저장.
          //console.log(e.nativeEvent.contentOffset.y - prevScrollY);
          // setScrollYState((prev) => e.nativeEvent.contentOffset.y - prev);
          // setScrollY(scrollYState);
        }}
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
