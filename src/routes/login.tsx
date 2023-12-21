import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;
const Div1 = styled.div`
  width: 350px;
  //height: 397px;
  border: 1px solid #dbdbdb;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: #262626;
  font-family: "Lobster", sans-serif;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem 0 3rem;
`;
const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 37px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  background-color: #fafafa;
  margin-bottom: 6px;
  padding: 0 5px;
`;
const Button = styled.button`
  width: 100%;
  height: 37px;
  border: none;
  border-radius: 4px;
  background-color: #4bb2f2;
  color: white;
  font-weight: bold;
  margin: 10px 0;
`;
const Switcher = styled.span`
  margin: 10px 0;
  font-size: 0.8rem;
  color: #262626;
  a {
    text-decoration: none;
    color: #3333cc;
  }
`;

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
