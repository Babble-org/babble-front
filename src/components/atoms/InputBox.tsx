import styled from "styled-components/native";
import { TextInputProps } from "react-native";
import { useState } from "react";

const InputContainer = styled.TextInput`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { focused: boolean }) =>
    props.focused ? "#5351c9" : "#d9d9d9"};
  margin: 10px 0;
  opacity: ${(props: { editable: boolean }) => (props.editable ? 1 : 0.5)};
`;

const InputBox = ({
  placeholder,
  enable,
  onChangeText,
  value,
  isValidate,
}: TextInputProps & { enable?: boolean; isValidate?: boolean }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <InputContainer
      placeholder={placeholder}
      editable={enable === undefined ? true : enable}
      onChangeText={onChangeText}
      value={value}
      placeholderTextColor={"#a0a0a0"}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
      focused={focused}
      isValidate={isValidate}
    ></InputContainer>
  );
};

export default InputBox;
