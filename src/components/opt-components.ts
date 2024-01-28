import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

export const OptionForm = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 500px;
  min-height: 100px;
  background-color: white;
  border: none;
  border-radius: 10px;
`;

export const Button = styled.button`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  &:hover {
    cursor: pointer;
  }
  &:active {
    filter: brightness(95%);
  }
`;
