import styled from "styled-components";
import { FaHome } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  //background-color: beige;
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
`;

const Menus = styled.div`
  //width: 100%;
  padding: 5px 5px;
  display: flex;
`;
const Title = styled.div`
  color: #262626;
  font-family: "Lobster", sans-serif;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem 0 3rem;
`;
const Icon = styled.img`
  padding: 1px 1px;
`;

const Menu = styled.div``;

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
          <Menus>
            <Title>Instagram</Title>
          </Menus>
          <Menus>
            <Icon src="../public/home.svg" />
            <Menu>홈</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>검색</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>탐색 탭</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>릴스</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>메시지</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>알림</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>만들기</Menu>
          </Menus>
          <Menus>
            <Icon />
            <Menu>프로필</Menu>
          </Menus>
        </MenuList>
      </MenuNav>

      {/* 탭창(메뉴 아이콘 클릭 시 내용 표시) */}
      <Tap></Tap>
    </Container>
  );
};
