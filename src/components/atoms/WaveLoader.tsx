import React from "react";
import styled from "styled-components/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from "react-native-reanimated";

const Dot = styled(Animated.View)`
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: black;
  margin: 0 2.5px;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WaveLoader = () => {
  const translateY1 = useSharedValue(0);
  const translateY2 = useSharedValue(0);
  const translateY3 = useSharedValue(0);

  translateY1.value = withRepeat(withTiming(-7, { duration: 300 }), -1, true);

  translateY2.value = withDelay(
    100,
    withRepeat(withTiming(-7, { duration: 300 }), -1, true)
  );

  translateY3.value = withDelay(
    200,
    withRepeat(withTiming(-7, { duration: 300 }), -1, true)
  );

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY1.value }],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY2.value }],
    };
  });

  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY3.value }],
    };
  });

  return (
    <Container>
      <Dot style={animatedStyle1} />
      <Dot style={animatedStyle2} />
      <Dot style={animatedStyle3} />
    </Container>
  );
};

export default WaveLoader;
