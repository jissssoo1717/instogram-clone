import { Link } from "react-router-dom";
import {
  Container,
  Div1,
  Title,
  Form,
  Input,
  Button,
  Switcher,
} from "../components/auth-components";
import styled from "styled-components";

const Span = styled.span`
  width: 100%;
  padding: 2px 18px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Signup = () => {
  return (
    <Container>
      <Div1>
        <Title>Instagram</Title>
        <Span>친구들의 사진과 동영상을 보려면 가입하세요.</Span>
        <Form>
          <Input
            value={email}
            name="email"
            placeholder="이메일 주소"
            onChange={onChange}
          />
          <Input
            value={name}
            name="name"
            placeholder="사용자 이름"
            onChange={onChange}
          />
          <Input
            value={password}
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
          />
          <Button>가입</Button>
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