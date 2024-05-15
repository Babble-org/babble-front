import styled from "styled-components/native";

const InputContainer = styled.TextInput`
  width: 100%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
  margin: 10px 0;
`;

const InputBox = ({ placeholder }: { placeholder: string }) => {
  return <InputContainer placeholder={placeholder}></InputContainer>;
};

export default InputBox;
