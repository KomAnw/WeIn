import { useRef, useState } from 'react';
import { Burger } from 'src/components/Burger';
import { Initials } from 'src/components/Initials';
import { Menu } from 'src/components/Menu';
import { Heading } from 'src/design/Fonts';
import styled from 'styled-components';

export type InputRef = HTMLInputElement | null;

export const Header = () => {
  const inputRef = useRef<InputRef>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    const input = inputRef.current as HTMLInputElement;

    input.click();
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <TopContainer>
        <Burger setIsOpen={onClickHandler} ref={inputRef} />
        <Title>Приглашение</Title>
        <Initials />
      </TopContainer>
      <Menu isOpen={isOpen} setIsOpen={onClickHandler} />
      <Background isOpen={isOpen} onClick={onClickHandler} />
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
`;

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 10px;
`;

const Background = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 50%);
  z-index: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease;
  visibility: ${({ isOpen }) => (isOpen ? 'initial' : 'hidden')};
`;

const Title = styled(Heading)`
  font-size: 20px;
`;
