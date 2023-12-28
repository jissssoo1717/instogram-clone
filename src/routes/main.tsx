import styled from "styled-components";
import { Header } from "../components/header";
import { useState } from "react";
import { Upload } from "./modals/upload-modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export function Main() {
  const [showUpload, setShowUpload] = useState(false);

  const handleUploadBtnShow = () => {
    setShowUpload(true);
  };
  const handleUploadBtnHide = () => {
    setShowUpload(false);
  };

  return (
    <Container>
      {showUpload && <Upload onHide={handleUploadBtnHide} />}
      <Header onUploadBtnShow={handleUploadBtnShow} />
    </Container>
  );
}
