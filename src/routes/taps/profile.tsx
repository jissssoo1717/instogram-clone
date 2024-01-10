import { useEffect, useState } from "react";
import { Container } from "../../components/taps-components";
import styled from "styled-components";

const Tap = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 300px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ProfileForm = styled.div`
  width: 1000px;
  background-color: aliceblue;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  background-color: rebeccapurple;
`;

const UserIcon = styled.img`
  width: 170px;
  height: 170px;
  margin: 0 50px;
`;

const UserForm = styled.div`
  margin-left: 50px;
  background-color: steelblue;
`;
const UserPosts = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(3, 300px);
  grid-auto-rows: 300px;
  gap: 30px;
  margin: 30px 0;
`;

const TestPostImage = styled.div`
  background-color: bisque;
`;

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <Container>
      {isLoading ? null : (
        <Tap>
          <ProfileForm>
            <UserInfo>
              <UserIcon src="/profile.svg" />
              <UserForm>닉넴</UserForm>
            </UserInfo>

            <UserPosts>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
              <TestPostImage></TestPostImage>
            </UserPosts>
          </ProfileForm>
        </Tap>
      )}
    </Container>
  );
};
