import styled from "styled-components/native";
import MainHeader from "../blocks/headers/MainHeader";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { BabbProps } from "../../utils";
import SwiperFlatList from "react-native-swiper-flatlist";
import Card from "./Card";
import Menu from "./Menu";
import { useState } from "react";
import BottomTabBar from "../blocks/BottomTabBar";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Home = ({ navigation }: { navigation: any }) => {
  const BabbData = useQuery({ queryKey: ["babbs"], queryFn: api.getBabb });
  const [visible, setVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPostMode, setIsPostMode] = useState(false);

  return (
    <Container>
      <MainHeader
        mainLogoOnPress={() => undefined}
        postOnPress={() => navigation.navigate("Stack", { screen: "Post" })}
        menuOnPress={() => setVisible(true)}
      ></MainHeader>
      <Menu visible={visible} setVisible={setVisible}></Menu>
      {!BabbData.isLoading && (
        <SwiperFlatList
          data={BabbData.data}
          renderItem={({ item }: { item: BabbProps }) => (
            <Card babb={item}></Card>
          )}
        ></SwiperFlatList>
      )}
      <BottomTabBar
        isPostMode={isPostMode}
        setIsPostMode={setIsPostMode}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
      ></BottomTabBar>
    </Container>
  );
};

export default Home;
