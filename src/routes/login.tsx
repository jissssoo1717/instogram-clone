import { useState } from "react";
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

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "id") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <Div1>
        <Title>Instagram</Title>
        <Form>
          <Input
            value={email}
            name="id"
            placeholder="사용자 이름 또는 이메일"
            onChange={onChange}
          />
          <Input
            value={password}
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
          />
          <Button>로그인</Button>
          <Switcher>
            {/* 비밀번호 바꾸기 컴포넌트 생성 후 주소 지정 */}
            <Link to="/">비밀번호를 잊으셨나요?</Link>
          </Switcher>
        </Form>
      </Div1>
      <Div1>
        <Switcher>
          계정이 없으신가요? <Link to="/signup"> 가입하기</Link>
        </Switcher>
      </Div1>
    </Container>
  );
};
