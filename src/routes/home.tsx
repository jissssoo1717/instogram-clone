import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Tap = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  right: 0;
`;

export const Home = () => {
  return (
    <Container>
      <Tap>Home</Tap>
    </Container>
  );
};
