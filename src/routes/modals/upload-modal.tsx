import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
  padding: 150px 30%;
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  background-image: url("/cancel.svg");
  width: 30px;
  height: 30px;
  border: none;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.5;
  }
`;

const Modal = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`;

const Header = styled.header`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #262626;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Tap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AttachInput = styled.input`
  display: none;
`;

const AttachInputButton = styled.label`
  height: 37px;
  border: none;
  border-radius: 4px;
  background-color: #4bb2f2;
  color: white;
  font-weight: bold;
  margin: 30px 0;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #1565c0;
  }
`;

interface Props {
  readonly onHide: () => void;
}

export const Upload = ({ onHide }: Props) => {
  return (
    <Container>
      <Modal>
        <Header>새 게시물 만들기</Header>
        <Tap>
          사진과 동영상을 업로드 하세요
          <AttachInput type="file" id="chooseFile" accept="image/*" />
          <AttachInputButton htmlFor="chooseFile">
            사진 업로드
          </AttachInputButton>
        </Tap>
      </Modal>

      <Button onClick={onHide}></Button>
    </Container>
  );
};
