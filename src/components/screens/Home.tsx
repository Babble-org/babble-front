import styled from "styled-components/native";
import axios from "axios";
import MainHeader from "../blocks/headers/MainHeader";
import Babb from "../blocks/Babb";
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Text = styled.Text``;
const Button = styled.Button``;

const Home = () => {
  return (
    <Container>
      <MainHeader
        mainLogoOnPress={undefined}
        profileOnPress={undefined}
      ></MainHeader>
      <Babb></Babb>
      <Button
        title={"msw test"}
        onPress={() => {
          axios.get("http://localhost:8081/").then((res) => {
            console.log(res.data);
          });
        }}
      />
    </Container>
  );
};

export default Home;
