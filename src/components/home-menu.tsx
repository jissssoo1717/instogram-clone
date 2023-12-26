import styled from "styled-components";

const Menus = styled.div`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 5px 10px 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  &:active {
    background-color: rgba(200, 200, 200, 0.2);
  }
`;

const Icon = styled.img`
  padding: 2px 2px;
`;

const MenuName = styled.div`
  padding-left: 10px;
`;

interface Props {
  readonly svg: string;
  readonly label: string;
  readonly onClick?: () => void;
}

export const Menu = ({ svg, label, onClick }: Props) => {
  return (
    <Menus onClick={onClick}>
      <Icon src={svg} />
      <MenuName>{label}</MenuName>
    </Menus>
  );
};
