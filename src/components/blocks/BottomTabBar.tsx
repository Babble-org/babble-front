import styled from "styled-components/native";
import { useContext, useState } from "react";
import { InsetsContext } from "../../utils/context";
import { Insets } from "../../utils";
import Icon from "../../utils/icon";
import { Shadow } from "react-native-shadow-2";
import colors from "../../utils/color";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useNavigation } from "@react-navigation/native";

const TabContainer = styled.View`
  width: 100%;
  height: ${(props: { insets: Insets }) => 60 + props.insets.bottom}px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  padding-bottom: ${(props: { insets: Insets }) => props.insets.bottom}px;
`;
const LogoBox = styled.TouchableOpacity`
  width: 33%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const MicLogoBox = styled.View`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: #fff;
  position: relative;
  top: -15px;
`;
const HideBox = styled.View`
  width: 100px;
  height: 70px;
  background-color: #fff;
  position: absolute;
  bottom: -20px;
`;
const BlueBox = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: #5351c9;
`;

const BottomTabBar = ({
  isPostMode,
  isRecording,
  setIsPostMode,
  setIsRecording,
  sendBtnOnPress,
}: {
  isPostMode?: boolean;
  setIsPostMode?: (value: boolean) => void;
  isRecording: boolean;
  setIsRecording: (value: boolean) => void;
  sendBtnOnPress: () => void;
}) => {
  const { insets } = useContext(InsetsContext);
  const [circleValue, setCircleValue] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isFirst, setIsFirst] = useState(true);

  const nav = useNavigation<any>();

  const onPressIn = () => {
    if (isPostMode) {
      setIsFirst(false);
      setIsRecording(true);
      const id = setInterval(() => {
        setCircleValue((prev) => {
          if (prev < 100) {
            return prev + 0.167; // 1000 / 60 = 0.167, 1분에 걸쳐 100으로 변경
          } else {
            clearInterval(id);
            return 100;
          }
        });
      }, 100);
      setIntervalId(id);
    }
  };

  const onPressOut = () => {
    setIsRecording(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    //setCircleValue(0); // 버튼에서 손을 떼면 값 초기화
  };

  return (
    <Shadow>
      <TabContainer insets={insets}>
        {isPostMode ? (
          <LogoBox disabled={isFirst || isRecording}>
            <Icon.TrashIcon
              size={35}
              color={isFirst || isRecording ? colors.Gray : colors.Black}
            />
          </LogoBox>
        ) : (
          <LogoBox>
            <Icon.RepeatIcon2 size={35} />
          </LogoBox>
        )}
        <Shadow offset={[0, -15]} style={{ borderRadius: 35 }}>
          <MicLogoBox>
            <HideBox></HideBox>
            <AnimatedCircularProgress
              rotation={0}
              style={{ position: "absolute" }}
              size={70}
              width={5}
              fill={circleValue}
              tintColor="#ff0000"
              backgroundColor="#fff"
            />
            <BlueBox onPressIn={onPressIn} onPressOut={onPressOut}>
              <Icon.MicIcon
                size={40}
                outline={true}
                color={"#fff"}
              ></Icon.MicIcon>
            </BlueBox>
          </MicLogoBox>
        </Shadow>
        {isPostMode ? (
          <LogoBox disabled={isFirst || isRecording} onPress={sendBtnOnPress}>
            <Icon.SendIcon
              size={35}
              color={isFirst || isRecording ? colors.Gray : colors.Black}
            />
          </LogoBox>
        ) : (
          <LogoBox>
            <Icon.PlayIcon size={35} />
          </LogoBox>
        )}
      </TabContainer>
    </Shadow>
  );
};

export default BottomTabBar;
