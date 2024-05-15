import styled from "styled-components/native";

const BtnContainer = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background-color: #5351c9;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

const MediumButton = ({ text, onPress }: { text: string; onPress: any }) => {
  return (
    <BtnContainer onPress={onPress}>
      <Text>{text}</Text>
    </BtnContainer>
  );
};

export default MediumButton;
