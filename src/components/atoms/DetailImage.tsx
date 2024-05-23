import styled from "styled-components/native";
import { DetailImageProps } from "../../utils";

const ImageBox = styled.Modal`
  opacity: 0.5;
`;
const ModalContainer = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ImageContainer = styled.View`
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 90%;
  height: 300px;
`;

const DetailImage = ({ visible, setVisible, img }: DetailImageProps) => {
  return (
    <ImageBox visible={visible} transparent animationType="fade">
      <ModalContainer onPress={() => setVisible(false)}>
        <ImageContainer>
          <StyledImage
            source={{ uri: img }}
            resizeMode={"stretch"}
          ></StyledImage>
        </ImageContainer>
      </ModalContainer>
    </ImageBox>
  );
};

export default DetailImage;
