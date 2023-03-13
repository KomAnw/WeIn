import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

type MenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Menu = ({ isOpen }: MenuProps) => {
  return (
    <List isOpen={isOpen}>
      <Element>Время</Element>
      <Element>Текс</Element>
      <Element>Расписание</Element>
      <Element>Карта</Element>
    </List>
  );
};

const List = styled.ul<{ isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  background: red;
  position: absolute;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : '-400px')};
  z-index: 14;
  padding-top: 50px;
  padding-left: 10px;
  transition: all 0.4s ease;
`;
const Element = styled.li``;
