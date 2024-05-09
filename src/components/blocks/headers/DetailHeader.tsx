import styled from "styled-components/native";
import { useContext } from "react";
import { InsetsContext } from "../../../utils/context";
import { Insets } from "../../../utils";

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: ${(props: { insets: Insets }) => props.insets.top}px;
  height: 60px;
  padding: 0 20px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: black;
`;

const DetailHeader = ({ title }: { title: string }) => {
  const { insets } = useContext(InsetsContext);

  return (
    <HeaderContainer insets={insets}>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default DetailHeader;
