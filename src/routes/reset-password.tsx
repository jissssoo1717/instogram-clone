import styled from "styled-components";
import { Switcher } from "../components/auth-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #dbdbdb;
`;

const Form = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const BackToLogin = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #dbdbdb;
  background-color: #e9e9e9;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const LockIcon = styled.img`
  border: 3px solid black;
  border-radius: 50%;
  width: 100px;
  padding: 20px;
  margin-top: 30px;
`;

const Message = styled.span`
  width: 300px;
  font-size: 13px;
  padding-top: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  margin-top: 20px;
  padding-left: 5px;
`;

const Button = styled.button`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #4bb2f2;
  color: white;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ResetPassword = () => {
  return (
    <Container>
      <Modal>
        <Form>
          <Block>
            <LockIcon src="/lock.svg" />
          </Block>
          <Block>
            <Message>
              비밀번호를 재설정하기 위해서 이메일 주소를 입력하세요.
            </Message>
          </Block>
          <Block>
            <Input placeholder="이메일 주소" />
            <Button>재설정 링크 보내기</Button>
          </Block>
        </Form>
        <BackToLogin>
          <Switcher>
            <Link to="/login">로그인으로 돌아가기</Link>
          </Switcher>
        </BackToLogin>
      </Modal>
    </Container>
  );
};
