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
  height: 700px;
  margin: 20px 0;
  background-color: pink;
`;

export const PostForm = () => {
  return (
    <Container>
      <Posts>
        <Post></Post>
        <Post></Post>
      </Posts>
    </Container>
  );
};
