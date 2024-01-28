import styled from "styled-components";
import { Container, OptionForm, Button } from "../../components/opt-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

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
