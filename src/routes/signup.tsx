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

export const Signup = () => {
  return (
    <Container>
      <Div1>
        <Title>Instagram</Title>
        <Form>
          <Input
            //value={password}
            name="email"
            placeholder="이메일 주소"
            //onChange={onChange}
          />
          <Input
            //value={password}
            name="name"
            placeholder="사용자 이름"
            //onChange={onChange}
          />
          <Input
            //value={password}
            name="password"
            placeholder="비밀번호"
            //onChange={onChange}
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
