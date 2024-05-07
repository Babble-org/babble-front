import styled from "styled-components/native";
import axios from "axios";
import MainHeader from "../blocks/headers/MainHeader";
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
      <Text>Home</Text>
      <Button
        title={"msw test"}
        onPress={() => {
          axios.get("http://localhost:8081/").then((res) => {
            console.log(res.data);
          });
          // fetch("http://localhost:8081/").then((res) => {
          //   res.json().then((data) => {
          //     console.log(data);
          //   });
          // });
        }}
      />
    </Container>
  );
};

export default Home;
