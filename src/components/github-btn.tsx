import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 20px;
  background-color: white;
  font-weight: 500;
  width: 350px;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid #dbdbdb;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GitHubButton() {
  const nav = useNavigate();
  const loginWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      nav("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={loginWithGithub}>
      <Logo src="/github-logo.svg" /> Github으로 로그인
    </Button>
  );
}
