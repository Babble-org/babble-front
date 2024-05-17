import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import colors from "../../utils/color";

const BtnContainer = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  background-color: ${colors.MainColor};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  opacity: ${(props: { disabled: boolean }) => (props.disabled ? 0.5 : 1)};
`;
const Text = styled.Text`
  color: #fff;
  font-size: ${(props: { fontSize: number }) => props.fontSize}px;
  font-weight: 500;
`;

const MediumButton = ({
  text,
  onPress,
  fontSize,
  enable,
}: TouchableOpacityProps & {
  text: string;
  fontSize?: number;
  enable?: boolean;
}) => {
  return (
    <BtnContainer
      onPress={onPress}
      disabled={enable === undefined ? false : !enable}
    >
      <Text fontSize={fontSize ? fontSize : 18}>{text}</Text>
    </BtnContainer>
  );
};

export default MediumButton;
