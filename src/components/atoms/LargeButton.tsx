import styled from "styled-components/native";

const BtnContainer = styled.TouchableOpacity`
  width: 320px;
  height: 60px;
  background-color: #000;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 800;
`;

const LargeButton = ({ text, onPress }: { text: string; onPress: any }) => {
  return (
    <BtnContainer onPress={onPress}>
      <Text>{text}</Text>
    </BtnContainer>
  );
};

export default LargeButton;
