import styled from "styled-components";
import { Menu } from "../components/home-menu";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const MenuNav = styled.header`
  width: 20%;
  height: 100%;
  border-right: 1px solid #dbdbdb;
`;
const MenuList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px;
`;
const Title = styled.div`
  color: #262626;
  font-family: "Lobster", sans-serif;
  font-size: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2rem 0.7rem 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const Tap = styled.div`
  width: 80%;
  height: 100%;
`;

export const Home = () => {
  return (
    <Container>
      {/* 네비게이션바 */}
      <MenuNav>
        <MenuList>
          <Title>Instagram</Title>

          <Menu svg="/home.svg" label="홈" />
          <Menu svg="/search.svg" label="검색" />
          <Menu svg="/browse.svg" label="탐색 탭" />
          <Menu svg="/reels.svg" label="릴스" />
          <Menu svg="/message.svg" label="메시지" />
          <Menu svg="/notification.svg" label="알림" />
          <Menu svg="/upload.svg" label="만들기" />
          <Menu svg="/profile.svg" label="프로필" />
        </MenuList>
      </MenuNav>

      {/* 탭창(메뉴 아이콘 클릭 시 내용 표시) */}
      <Tap></Tap>
    </Container>
  );
};
