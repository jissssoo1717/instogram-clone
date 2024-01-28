import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  background-image: url("/like.svg");
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
  &:active {
  }
`;

export const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return <Button onClick={() => console.log("clicked")}></Button>;
};
