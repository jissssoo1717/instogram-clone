import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Div1,
  Title,
  Form,
  Input,
  Button,
  Switcher,
} from "../components/auth-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

const Span = styled.span`
  width: 100%;
  padding: 2px 18px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Signup = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });

      navigator("/login");
    } catch (e) {
      if(e instanceof FirebaseError) {
        alert(e.message);
      }
    } finally {
      setEmail("");
      setName("");
      setPassword("");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <Div1>
        <Title>Instogram</Title>
        <Span>친구들의 사진과 동영상을 보려면 가입하세요.</Span>
        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            value={email}
            name="email"
            placeholder="이메일 주소"
            onChange={onChange}
            required
          />
          <Input
            value={name}
            name="name"
            placeholder="사용자 이름"
            onChange={onChange}
            required
          />
          <Input
            type="password"
            value={password}
            name="password"
            maxLength={16}
            placeholder="비밀번호"
            onChange={onChange}
            required
          />
          <Button type="submit">가입</Button>
        </Form>
      </Div1>
      <Div1>
        <Switcher>
          계정이 있으신가요? <Link to="/login">로그인</Link>
        </Switcher>
      </Div1>
    </Container>
  );
};
