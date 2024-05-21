import styled from "styled-components/native";

const ImageBox = styled.Image`
  width: ${(props: { width: number }) => props.width}px;
  height: ${(props: { height: number }) => props.height}px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;
const ImageContainer = styled.View``;
const ImageWrap = styled.View`
  flex-direction: row;
`;

const ImageViewer = ({ img }: { img: string[] | undefined }) => {
  if (img === undefined || img.length === 0) {
    return null;
  }

  if (img.length === 1) {
    return <ImageBox width={290} height={200} source={{ uri: img[0] }} />;
  }

  if (img.length === 2) {
    return (
      <ImageWrap>
        <ImageBox width={145} height={200} source={{ uri: img[0] }} />
        <ImageBox width={145} height={200} source={{ uri: img[1] }} />
      </ImageWrap>
    );
  }

  if (img.length === 3) {
    return (
      <ImageContainer>
        <ImageWrap>
          <ImageBox width={145} height={100} source={{ uri: img[0] }} />
          <ImageBox width={145} height={100} source={{ uri: img[1] }} />
        </ImageWrap>
        <ImageBox width={300} height={100} source={{ uri: img[2] }} />
      </ImageContainer>
    );
  }
};
export default ImageViewer;
