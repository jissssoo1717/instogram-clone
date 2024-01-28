import styled from "styled-components";
import { Button, Container, OptionForm } from "../../components/opt-components";

const DeleteButton = styled(Button)`
  border-radius: 10px 10px 0 0;
`;
const CancleButton = styled(Button)`
  border-radius: 0 0 10px 10px;
`;

type Props = {
  optionCloseHandle: () => void;
  deleteHandle: () => void;
};

export const PostOption = ({ optionCloseHandle, deleteHandle }: Props) => {
  return (
    <Container>
      <OptionForm>
        <DeleteButton onClick={deleteHandle}>삭제하기</DeleteButton>
        <CancleButton onClick={optionCloseHandle}>취소</CancleButton>
      </OptionForm>
    </Container>
  );
};
