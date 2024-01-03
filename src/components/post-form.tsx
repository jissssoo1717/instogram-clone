import styled from "styled-components";
import { PostProps } from "./posts";

const Container = styled.div`
  width: 100%;
  max-height: 750px;
  margin: 20px 0;
`;
const Head = styled.div`
  width: 100%;
  height: 50px;
  padding: 2px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserIcon = styled.img`
  // 사용자 정보의 프로필 이미지를 가져올 예정
  /* width: 30px;
  height: 30px; */
  margin: 0 2px;
`;
const UserName = styled.span`
  // 사용자 정보의 닉네임(이름)을 가져올 예정
  margin-left: 5px;
  font-weight: bold;
`;
const OptButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url("/post-option.svg");
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const Body = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  max-height: 700px;
`;
const PostImage = styled.img`
  // 사용자가 게시글 작성 후 해당 이미지 불러옴
  width: 500px;
  height: 500px;
  border-radius: 4px;
`;
const PostUIs = styled.div`
  width: 100%;
  height: 40px;
`;

const PostText = styled.div`
  width: 100%;
  //max-height: 100px;
  //padding: 10px 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Comments = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 2px;
  margin-bottom: 10px;
  border-bottom: 1px solid #a4a4a4;
`;

const CommentTextarea = styled.textarea`
  width: 400px;
  resize: none;
  text-decoration: none;
  border: none;
  background-color: transparent;
`;

export const PostForm = ({ userName, photo, text }: PostProps) => {
  return (
    //<Container>
    //<Posts>
    <Container>
      <Head>
        <UserInfo>
          <UserIcon src="/profile.svg" />
          <UserName>{userName}</UserName>
        </UserInfo>
        <OptButton></OptButton>
      </Head>

      <Body>
        <PostImage src={photo} />
        <PostUIs></PostUIs>
        <PostText>{text}</PostText>
        <Comments>
          <CommentTextarea
            placeholder="댓글 달기..."
            rows={1}
            maxLength={140}
          />
        </Comments>
      </Body>
    </Container>
    //</Posts>
    //</Container>
  );
};
