import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Button
        title={"msw test"}
        onPress={() => {
          fetch("http://localhost:8081/")
            .then((res) => res.json())
            .then((data) => console.log(data));
        }}
      />
    </Container>
  );
};

export default Home;
