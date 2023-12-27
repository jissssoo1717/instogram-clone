import styled from "styled-components";
import { Menu } from "../components/home-menu";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

const Container = styled.header`
  width: 20%;
  height: 100%;
  border-right: 1px solid #dbdbdb;
  position: fixed;
  z-index: 50;
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
export const Header = () => {
  const navigator = useNavigate();

  return (
    <Container>
      <MenuList>
        <Title onClick={() => navigator("/")}>Instagram</Title>

        <Menu svg="/home.svg" label="홈" onClick={() => navigator("/")} />
        <Menu
          svg="/search.svg"
          label="검색"
          /* 검색 모달 */
          onClick={() => console.log("검색")}
        />
        <Menu
          svg="/browse.svg"
          label="탐색 탭"
          /* 탐색 페이지로 이동 */
          onClick={() => navigator("/explore")}
        />
        <Menu
          svg="/reels.svg"
          label="릴스"
          /* 릴스 페이지로 이동 */
          onClick={() => navigator("/reels")}
        />
        <Menu
          svg="/message.svg"
          label="메시지"
          /* 메세지 페이지로 이동 */
          onClick={() => navigator("/direct/inbox")}
        />
        <Menu
          svg="/notification.svg"
          label="알림"
          /* 알림 모달 */
          onClick={() => console.log("알림")}
        />
        <Menu
          svg="/upload.svg"
          label="만들기"
          /* 만들기(게시글 업로드) 모달 */
          onClick={() => console.log("만들기")}
        />
        <Menu
          svg="/profile.svg"
          label="프로필"
          /* 프로필 페이지로 이동 */
          onClick={() => navigator("/profile")}
        />
      </MenuList>
    </Container>
  );
};
