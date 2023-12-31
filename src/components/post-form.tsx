import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Posts = styled.div`
  width: 500px;
  height: 100%;
`;

const Post = styled.div`
  width: 100%;
  height: 750px;
  margin: 20px 0;
  background-color: pink;
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
  width: 100%;
  height: 700px;
  /* padding-bottom: 10px; */
  border-bottom: 1px solid black;
  background-color: aquamarine;
`;

const PostImage = styled.img`
  // 사용자가 게시글 작성 후 해당 이미지 불러옴
  width: 500px;
  height: 500px;
  background-color: orange;
`;

const PostUIs = styled.div`
  width: 100%;
  height: 30px;
  background-color: greenyellow;
`;

const PostText = styled.div`
  width: 100%;
  max-height: 100px;
  background-color: wheat;
  padding: 10px 2px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
`;

const Text = styled.p``;

export const PostForm = () => {
  return (
    <Container>
      <Posts>
        <Post>
          <Head>
            <UserInfo>
              <UserIcon src="/profile.svg" />
              <UserName>name</UserName>
            </UserInfo>
            <OptButton></OptButton>
          </Head>

          <Body>
            <PostImage />
            <PostUIs></PostUIs>
            <PostText>
              <Text>test</Text>
            </PostText>
          </Body>
        </Post>
      </Posts>
    </Container>
  );
};
