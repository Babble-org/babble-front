import styled from "styled-components/native";
import { TextInputProps } from "react-native";

const InputContainer = styled.TextInput`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
  margin: 10px 0;
  opacity: ${(props: { editable: boolean }) => (props.editable ? 1 : 0.5)};
`;

const InputBox = ({
  placeholder,
  enable,
  onChangeText,
  value,
}: TextInputProps & { enable?: boolean }) => {
  return (
    <InputContainer
      placeholder={placeholder}
      editable={enable === undefined ? true : enable}
      onChangeText={onChangeText}
      value={value}
    ></InputContainer>
  );
};

export default InputBox;
