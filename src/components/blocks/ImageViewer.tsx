import styled from "styled-components/native";
import DetailImage from "../atoms/DetailImage";
import { useState } from "react";

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
`;

const ImageViewer = ({ img }: { img: string[] | undefined }) => {
  const [visible, setVisible] = useState(false);
  if (img === undefined || img.length === 0) {
    return null;
  }
  const [imgURL, setImgURL] = useState("");

  const imgOnPress = (img: string) => {
    setVisible(true);
    setImgURL(img);
  };

  if (img.length === 1) {
    return (
      <>
        <ImageBtn onPress={() => imgOnPress(img[0])}>
          <ImageBox width={290} height={200} source={{ uri: img[0] }} />
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
            <ImageBox width={145} height={200} source={{ uri: img[0] }} />
          </ImageBtn>
          <ImageBtn onPress={() => imgOnPress(img[1])}>
            <ImageBox width={145} height={200} source={{ uri: img[1] }} />
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
              <ImageBox width={145} height={100} source={{ uri: img[0] }} />
            </ImageBtn>
            <ImageBtn onPress={() => imgOnPress(img[1])}>
              <ImageBox width={145} height={100} source={{ uri: img[1] }} />
            </ImageBtn>
          </ImageWrap>
          <ImageBtn onPress={() => imgOnPress(img[2])}>
            <ImageBox width={300} height={100} source={{ uri: img[2] }} />
          </ImageBtn>
        </ImageContainer>
        <DetailImage visible={visible} setVisible={setVisible} img={imgURL} />
      </>
    );
  }
};
export default ImageViewer;
