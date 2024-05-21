import styled from "styled-components/native";
import MainHeader from "../blocks/headers/MainHeader";
import Babb from "../blocks/Babb";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { BabbProps } from "../../utils";
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const ContentContainer = styled.FlatList``;

const Home = () => {
  const BabbData = useQuery({ queryKey: ["babbs"], queryFn: api.getBabb });

  return (
    <Container>
      <MainHeader
        mainLogoOnPress={undefined}
        profileOnPress={undefined}
      ></MainHeader>
      {!BabbData.isLoading && (
        <ContentContainer
          data={BabbData.data}
          renderItem={({ item: babb }: { item: BabbProps }) => (
            <Babb
              key={babb.id}
              nick_name={babb.nick_name}
              content={babb.content}
              inserted_at={babb.inserted_at}
              img={babb.img}
            />
          )}
        ></ContentContainer>
      )}
      {/* {!BabbData.isLoading &&
        BabbData.data.map((babb: BabbProps) => {
          return (
            <Babb
              key={babb.id}
              nick_name={babb.nick_name}
              content={babb.content}
              inserted_at={babb.inserted_at}
              img={babb.img}
            ></Babb>
          );
        })} */}
    </Container>
  );
};

export default Home;
