import styled from "styled-components/native";
import { Shadow } from "react-native-shadow-2";
import colors from "../../utils/color";
import BabbMenu from "./BabbMenu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Icon from "../../utils/icon";
import WaveLoader from "../atoms/WaveLoader";
import * as ImagePicker from "expo-image-picker";
import Loader from "../atoms/Loader";

const BabbContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 15px 20px;
`;
const ProfileView = styled.View`
  width: 50px;
`;
const Profile = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #000;
`;
const ContentView = styled.View`
  flex: 1;
  margin-left: 10px;
`;
const ContentWrap = styled.View`
  margin: 10px 10px;
`;
const NickNameText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;
const ContentText = styled.Text`
  font-size: 15px;
  margin-bottom: 15px;
`;
const TimeText = styled.Text`
  font-size: 12px;
  color: ${colors.Gray};
`;
const UpperWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const LowerWrap = styled.View``;
const UpperLeftWrap = styled.View`
  flex-direction: row;
`;
const IconBtn = styled.TouchableOpacity``;
const ImageWrap = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;
const ImageBox = styled.View`
  width: 70px;
  height: 70px;
  margin-right: 5px;
  border-radius: 10px;
`;
const Image = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 5px;
  border-radius: 10px;
`;
const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${colors.Gray};
  justify-content: center;
  align-items: center;
`;

const PostBox = ({
  isRecording,
  setImageData,
}: {
  isRecording: boolean;
  setImageData: Dispatch<SetStateAction<object[] | null>>;
}) => {
  // 작성시간을 n분전으로 표시하는 함수.
  const elapsedTime = (date: number): string => {
    const start = new Date(date);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return "방금 전";

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
  };
  const [visible, setVisible] = useState(false);
  const [shadowValue, setShadowValue] = useState(10);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [localImageData, setLocalImageData] = useState<any[] | null>(null);

  useEffect(() => {
    if (isRecording) {
      setIsFirst(false);
      const id = setInterval(() => {
        setShadowValue((prev) => {
          if (prev < 20) {
            return prev + 2;
          } else {
            clearInterval(id);
            return 20;
          }
        });
      }, 10); // 0.1초마다 업데이트
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setShadowValue(10);
    }
  }, [isRecording]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 3,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setImageData([
        {
          uri: result.assets[0].uri,
          type: result.assets[0].mimeType,
          name: result.assets[0].fileName,
        },
        result.assets[1] && {
          uri: result.assets[1].uri,
          type: result.assets[1].mimeType,
          name: result.assets[1].fileName,
        },
        result.assets[2] && {
          uri: result.assets[2].uri,
          type: result.assets[2].mimeType,
          name: result.assets[2].fileName,
        },
      ]);
      setLocalImageData([
        {
          uri: result.assets[0].uri,
          type: result.assets[0].mimeType,
          name: result.assets[0].fileName,
        },
        result.assets[1] && {
          uri: result.assets[1].uri,
          type: result.assets[1].mimeType,
          name: result.assets[1].fileName,
        },
        result.assets[2] && {
          uri: result.assets[2].uri,
          type: result.assets[2].mimeType,
          name: result.assets[2].fileName,
        },
      ]);
    }
  };

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const longText =
    "에어컨 청소 꼭 하고 쓰세요 작년에 그냥 썼던 거 생각하면 아찔하다 진짜";

  useEffect(() => {
    const delay = setTimeout(() => {
      const intervalId = setInterval(() => {
        setText((prevText) => {
          setIsTyping(true);
          if (prevText.length < longText.length) {
            return longText.slice(0, prevText.length + 1);
          }
          clearInterval(intervalId);
          return prevText;
        });
      }, 10000 / longText.length); // 10초 동안 천천히 채웁니다.

      return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
    }, 3000); // 3초 후에 시작합니다.

    return () => clearTimeout(delay); // 컴포넌트가 언마운트될 때 타임아웃을 정리합니다.
  }, []);

  return (
    <BabbContainer>
      <ProfileView>
        <Profile></Profile>
      </ProfileView>
      <ContentView>
        <Shadow
          style={{ width: "100%", borderRadius: 10 }}
          distance={shadowValue}
        >
          <ContentWrap>
            <UpperWrap>
              <UpperLeftWrap>
                <NickNameText>박건태</NickNameText>
                <TimeText>{elapsedTime(new Date().getTime())}</TimeText>
              </UpperLeftWrap>
            </UpperWrap>
            <LowerWrap>
              <ContentText>
                {isRecording ? (
                  isTyping ? (
                    <ContentText>{text}</ContentText>
                  ) : (
                    <WaveLoader />
                  )
                ) : isFirst ? (
                  <TimeText style={{ fontSize: 14 }}>
                    버튼을 눌러 녹음을 시작하세요.
                  </TimeText>
                ) : (
                  <ContentText>{text}</ContentText>
                )}
              </ContentText>
              <ImageWrap>
                {localImageData !== null &&
                  localImageData.map((data: any, index: number) => {
                    if (data !== undefined) {
                      return (
                        <ImageBox key={index}>
                          <Image source={{ uri: data.uri }} />
                          <CloseBtn>
                            <Icon.TrashIcon size={13} color={colors.White} />
                          </CloseBtn>
                        </ImageBox>
                      );
                    }
                  })}
              </ImageWrap>
              <IconBtn disabled={isRecording || isFirst} onPress={pickImage}>
                <Icon.PhotoIcon
                  size={20}
                  color={isRecording || isFirst ? colors.Gray : colors.Black}
                />
              </IconBtn>
            </LowerWrap>
          </ContentWrap>
        </Shadow>
      </ContentView>
      <BabbMenu visible={visible} setVisible={setVisible} />
    </BabbContainer>
  );
};

export default PostBox;
