import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Tap = styled.div`
  width: 80%;
  height: 100%;
`;

export const Home = () => {
  return (
    <Container>
      {/* 네비게이션바 */}

      {/* 탭창(메뉴 아이콘 클릭 시 내용 표시) */}
      <Tap></Tap>
    </Container>
  );
};
