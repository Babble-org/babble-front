import styled from "styled-components/native";
import MainHeader from "../blocks/headers/MainHeader";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { BabbProps } from "../../utils";
import SwiperFlatList from "react-native-swiper-flatlist";
import Card from "./Card";
import Menu from "./Menu";
import { useCallback, useEffect, useState } from "react";
import BottomTabBar from "../blocks/BottomTabBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SkeletonLoader from "../atoms/SkeletonLoader";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from "react-native-reanimated";
import { ArrowDirection } from "../atoms/Arrow";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const windowWidth = Dimensions.get("window").width;

const Home = ({ navigation }: { navigation: any }) => {
  const { data: babbData, isLoading } = useQuery({
    queryKey: ["babbs"],
    queryFn: api.getBabb,
  });
  const [visible, setVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPostMode, setIsPostMode] = useState(false);

  useEffect(() => {
    getData();
    if (babbData) {
      //console.log(babbData[0].images);
    }
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("access_token");
      sleep();
      if (value !== null) {
        // 토큰 유효성 확인
      } else {
        navigation.replace("Stack", { screen: "StartPage" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const headerHeight = 100;
  const PAGE_WIDTH = Dimensions.get("window").width;
  const PAGE_HEIGHT = 300;
  const directionAnim = useSharedValue<any>(ArrowDirection.IS_VERTICAL);
  const [isVertical, setIsVertical] = useState(false);

  const animationStyle = useCallback(
    (value: number) => {
      "worklet";
      const translateY = interpolate(value, [-1, 0, 1], [-PAGE_HEIGHT, 0, 0]);

      const translateX = interpolate(value, [-1, 0, 1], [-PAGE_WIDTH, 0, 0]);

      const zIndex = interpolate(value, [-1, 0, 1], [300, 0, -300]);

      const scale = interpolate(value, [-1, 0, 1], [1, 1, 0.85]);

      return {
        transform: [isVertical ? { translateY } : { translateX }, { scale }],
        zIndex,
      };
    },
    [PAGE_HEIGHT, PAGE_WIDTH, isVertical]
  );

  useAnimatedReaction(
    () => directionAnim.value,
    (direction) => {
      switch (direction) {
        case ArrowDirection.IS_VERTICAL:
          runOnJS(setIsVertical)(false);
          break;
        case ArrowDirection.IS_HORIZONTAL:
          runOnJS(setIsVertical)(false);
          break;
      }
    },
    []
  );
  const [isLoad, setIsLoad] = useState(true);
  // 2초 대기 하는 함수
  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setIsLoad(false);
    });
  };

  return (
    <>
      <Container>
        <MainHeader
          mainLogoOnPress={() => undefined}
          postOnPress={() => navigation.navigate("Stack", { screen: "Post" })}
          menuOnPress={() => setVisible(true)}
        ></MainHeader>

        <Menu visible={visible} setVisible={setVisible}></Menu>
        {isLoad ? (
          <SkeletonLoader />
        ) : (
          <Carousel
            width={windowWidth}
            data={babbData}
            customAnimation={animationStyle}
            renderItem={({ item }: { item: BabbProps }) => (
              <Card babb={item}></Card>
            )}
          ></Carousel>
        )}
      </Container>
      <BottomTabBar
        isPostMode={isPostMode}
        setIsPostMode={setIsPostMode}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
      ></BottomTabBar>
    </>
  );
};

export default Home;
