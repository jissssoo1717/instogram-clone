import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const OptionForm = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 500px;
  min-height: 100px;
  background-color: white;
  border: none;
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  &:hover {
    cursor: pointer;
  }
  &:active {
    filter: brightness(95%);
  }
`;

const LogoutButton = styled(Button)`
  border-radius: 10px 10px 0 0;
`;

const CancleButton = styled(Button)`
  border-radius: 0 0 10px 10px;
`;

type Props = {
  optionCloseHandle: () => void;
};

export const ProfileOption = ({ optionCloseHandle }: Props) => {
  const nav = useNavigate();

  const logOut = () => {
    auth.signOut();
    nav("/login");
  };

  return (
    <Container>
      <OptionForm>
        <LogoutButton onClick={logOut}>로그아웃</LogoutButton>
        <CancleButton onClick={optionCloseHandle}>취소</CancleButton>
      </OptionForm>
    </Container>
  );
};
