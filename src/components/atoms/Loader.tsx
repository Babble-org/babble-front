import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import colors from "../../utils/color";

const Container = styled.Modal``;
const Background = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const Loader = () => {
  return (
    <Container visible={true} transparent>
      <Background>
        <ActivityIndicator size="large" color={colors.MainColor} />
      </Background>
    </Container>
  );
};

export default Loader;
