import styled from 'styled-components';
import { Initials } from 'src/components/Initials';

export const Footer = () => {
  return (
    <Container>
      {/* <Image src={image} /> */}
      <Initials />
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;
  display: grid;
  justify-items: center;
`;
