import styled from "styled-components/native";
import { useContext } from "react";
import { InsetsContext } from "../../utils/context";
import { Insets } from "../../utils";

const TabContainer = styled.View`
  background-color: beige;
  height: ${(props: { insets: Insets }) => 60 + props.insets.bottom}px;
`;

const BottomTabBar = () => {
  const { insets } = useContext(InsetsContext);
  return <TabContainer insets={insets}></TabContainer>;
};

export default BottomTabBar;
