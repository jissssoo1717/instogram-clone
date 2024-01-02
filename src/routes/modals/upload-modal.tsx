import React, { useState } from "react";
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
  //padding: 10% 30%;
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

const Modal = styled.form`
  background-color: white;
  width: 1200px;
  height: 700px;
  max-height: 1200px;
  border: none;
  border-radius: 10px;
`;

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 36px;
  padding: 10px;
  border-bottom: 1px solid #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Tap = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
`;

const UploadPhotoTap = styled(Tap)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadPostTap = styled(Tap)``;

const TextForm = styled.div`
  width: 100%;
  //border-bottom: 1px solid #262626;
`;
const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid #262626;
`;

const ImageForUploading = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
  padding: 30px;
  border-right: 1px solid #262626;
  border-top: none;
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

const UploadButton = styled.button`
  position: absolute;
  right: 3px;
  border: none;
  background-color: transparent;
  color: #4bb2f2;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #262626;
  }
  &:active {
    opacity: 0.8;
  }
`;

interface Props {
  readonly onHide: () => void;
}

export const Upload = ({ onHide }: Props) => {
  const [isFile, setIsFile] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length === 1) {
      setImageFile(files[0]);
      setIsFile(true);
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onUpload = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  return (
    <Container>
      <Modal onSubmit={onUpload}>
        <Header>
          새 게시물 만들기
          {isFile ? <UploadButton type="submit">공유하기</UploadButton> : null}
        </Header>
        {isFile ? (
          <UploadPostTap>
            <ImageForUploading src={imageUrl} />
            <TextForm>
              <Textarea
                placeholder="문구를 입력하세요."
                maxLength={500}
                rows={7}
                required
                value={text}
                onChange={onChangeText}
              />
            </TextForm>
          </UploadPostTap>
        ) : (
          <UploadPhotoTap>
            사진과 동영상을 업로드 하세요
            <AttachInput
              type="file"
              id="chooseFile"
              accept="image/*"
              onChange={onUploadImage}
            />
            <AttachInputButton htmlFor="chooseFile">
              사진 업로드
            </AttachInputButton>
          </UploadPhotoTap>
        )}
      </Modal>

      <Button onClick={onHide}></Button>
    </Container>
  );
};
