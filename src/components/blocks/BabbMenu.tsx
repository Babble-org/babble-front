import styled from "styled-components/native";
import colors from "../../utils/color";
import { MenuProps } from "../../utils";
import { useContext, useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { InsetsContext } from "../../utils/context";
import Icon from "../../utils/icon";

const Container = styled.Modal``;
const ModalContainer = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
`;
const MenuContainer = styled(Animated.View)`
  background-color: ${colors.White};
  position: absolute;
  bottom: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  height: ${(props: { insets: number }) => 200 + props.insets}px;
  align-items: center;
`;
const MenuWrap = styled.View`
  width: 90%;
  height: 180px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: ${colors.LightGray};
`;
const MenuBtn = styled.TouchableOpacity`
  width: 100%;
  height: 59px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;
const MenuSaparator = styled.View`
  align-self: center;
  width: 90%;
  height: 1px;
  background-color: ${colors.disabled};
`;
const MenuText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  margin-left: 20px;
`;

const BabbMenu = ({ visible, setVisible }: MenuProps) => {
  const { insets } = useContext(InsetsContext);
  const translateY = useSharedValue(300);
  const [modalClose, setModalClose] = useState(false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 150 });
    }
    if (modalClose) {
      translateY.value = withTiming(300, { duration: 100 });
      setTimeout(() => {
        setVisible(false);
        setModalClose(false);
      }, 50);
    }
  }, [visible, translateY, modalClose]);
  //이 계정 정보, 관심 없음, 신고
  return (
    <Container visible={visible} transparent animationType="fade">
      <ModalContainer onPress={() => setModalClose(true)}></ModalContainer>
      <MenuContainer insets={insets.bottom} style={animatedStyle}>
        <MenuWrap insets={insets.bottom}>
          <MenuBtn>
            <Icon.ProfileIcon width={25} height={25} color={colors.Black} />
            <MenuText>이 계정 정보</MenuText>
          </MenuBtn>
          <MenuSaparator />
          <MenuBtn>
            <Icon.NotInterestedIcon size={25} />
            <MenuText>관심 없음</MenuText>
          </MenuBtn>
          <MenuSaparator />
          <MenuBtn>
            <Icon.ReportIcon size={25} color={colors.Red} />
            <MenuText style={{ color: colors.Red }}>신고하기</MenuText>
          </MenuBtn>
        </MenuWrap>
      </MenuContainer>
    </Container>
  );
};

export default BabbMenu;
