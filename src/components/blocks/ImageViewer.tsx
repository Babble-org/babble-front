import styled from "styled-components/native";
import DetailImage from "../atoms/DetailImage";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const ImageBox = styled.Image`
  width: ${(props: { width: number }) => props.width}px;
  height: ${(props: { height: number }) => props.height}px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;
const ImageBtn = styled.Pressable``;
const ImageContainer = styled.View``;
const ImageWrap = styled.View`
  flex-direction: row;
  width: 100%;
`;

const ImageViewer = ({ img }: { img: any }) => {
  const [visible, setVisible] = useState(false);
  const width = Dimensions.get("window").width;
  // 전체 화면 넓이에서 프로필 60px, 전체 좌우 마진 40px, 내부 좌우 마진 20px을 뺌.
  const fullWidth = width - 120;
  if (img === undefined || img.length === 0) {
    return null;
  }
  const [imgURL, setImgURL] = useState("");

  const imgOnPress = (img: any) => {
    setVisible(true);
    setImgURL(`https://babble-static.among.world/${img.path}`);
  };

  if (img.length === 1) {
    return (
      <>
        <ImageBtn onPress={() => imgOnPress(img[0])}>
          <ImageBox
            width={fullWidth}
            height={200}
            source={{
              uri: `https://babble-static.among.world/${img[0].path}`,
            }}
          />
        </ImageBtn>
        <DetailImage visible={visible} setVisible={setVisible} img={imgURL} />
      </>
    );
  }

  if (img.length === 2) {
    return (
      <>
        <ImageWrap>
          <ImageBtn onPress={() => imgOnPress(img[0])}>
            <ImageBox
              width={fullWidth / 2 - 5}
              height={200}
              source={{
                uri: `https://babble-static.among.world/${img[0].path}`,
              }}
            />
          </ImageBtn>
          <ImageBtn onPress={() => imgOnPress(img[1])}>
            <ImageBox
              width={fullWidth / 2 - 5}
              height={200}
              source={{
                uri: `https://babble-static.among.world/${img[1].path}`,
              }}
            />
          </ImageBtn>
        </ImageWrap>
        <DetailImage visible={visible} setVisible={setVisible} img={imgURL} />
      </>
    );
  }

  if (img.length === 3) {
    return (
      <>
        <ImageContainer>
          <ImageWrap>
            <ImageBtn onPress={() => imgOnPress(img[0])}>
              <ImageBox
                width={fullWidth / 2 - 5}
                height={100}
                source={{
                  uri: `https://babble-static.among.world/${img[0].path}`,
                }}
              />
            </ImageBtn>
            <ImageBtn onPress={() => imgOnPress(img[1])}>
              <ImageBox
                width={fullWidth / 2 - 5}
                height={100}
                source={{
                  uri: `https://babble-static.among.world/${img[1].path}`,
                }}
              />
            </ImageBtn>
          </ImageWrap>
          <ImageBtn onPress={() => imgOnPress(img[2])}>
            <ImageBox
              width={fullWidth}
              height={100}
              source={{
                uri: `https://babble-static.among.world/${img[2].path}`,
              }}
            />
          </ImageBtn>
        </ImageContainer>
        <DetailImage visible={visible} setVisible={setVisible} img={imgURL} />
      </>
    );
  }
};
export default ImageViewer;
