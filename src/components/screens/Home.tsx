import styled from "styled-components/native";
import MainHeader from "../blocks/headers/MainHeader";
import Babb from "../blocks/Babb";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { BabbProps } from "../../utils";
import SwiperFlatList from "react-native-swiper-flatlist";
import Card from "./Card";
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
        menuOnPress={undefined}
      ></MainHeader>
      {!BabbData.isLoading && (
        <SwiperFlatList
          data={BabbData.data}
          renderItem={({ item }: { item: BabbProps }) => (
            <Card babb={item}></Card>
          )}
        ></SwiperFlatList>
      )}
    </Container>
  );
};

export default Home;
