import { Heading } from 'src/design/Fonts';
import styled from 'styled-components';
import { Initials } from './Initials';

type MenuProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  return (
    <List isOpen={isOpen}>
      <Link href="#time" onClick={setIsOpen}>
        <Element>Время</Element>
      </Link>
      <Link href="#text" onClick={setIsOpen}>
        <Element>Информация</Element>
      </Link>
      <Link href="#schedule" onClick={setIsOpen}>
        <Element>Расписание</Element>
      </Link>
      <Link href="#mapId" onClick={setIsOpen}>
        <Element>Карта</Element>
      </Link>
      <Initials />
    </List>
  );
};

const List = styled.ul<{ isOpen: boolean }>`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: calc(100vh + 10px);
  background: white;
  position: absolute;
  top: -2px;
  left: ${({ isOpen }) => (isOpen ? 0 : '-400px')};
  z-index: 14;
  padding-top: 50px;
  padding-left: 10px;
  transition: all 0.4s ease;

  padding-top: 100px;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  gap: 40px;

  ${Initials} {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Element = styled(Heading).attrs({ as: 'li' })`
  font-style: italic;
  font-size: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;
