import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Div1,
  Title,
  Form,
  Input,
  Button,
  Switcher,
} from "../components/auth-components";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import GitHubButton from "../components/github-btn";
import { FirebaseError } from "firebase/app";

export const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigator("/");
    } catch (e) {
      if(e instanceof FirebaseError) {
        alert(e.message);
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container>
      <Div1>
        <Title>Instogram</Title>
        <Form onSubmit={onSubmit}>
          <Input
            value={email}
            name="email"
            placeholder="이메일"
            onChange={onChange}
          />
          <Input
            type="password"
            value={password}
            maxLength={16}
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
          />
          <Button>로그인</Button>
          <Switcher>
            {/* 비밀번호 바꾸기 컴포넌트 생성 후 주소 지정 */}
            <Link to="/password/reset">비밀번호를 잊으셨나요?</Link>
          </Switcher>
        </Form>
      </Div1>
      <Div1>
        <Switcher>
          계정이 없으신가요? <Link to="/signup"> 가입하기</Link>
        </Switcher>
      </Div1>
      <GitHubButton />
    </Container>
  );
};
