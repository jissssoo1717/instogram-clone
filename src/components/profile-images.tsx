import styled from "styled-components";

export const ImageContainer = styled.div<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  background-size: 100%;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
