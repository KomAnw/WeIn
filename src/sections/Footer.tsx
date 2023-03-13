import styled from 'styled-components';
import spbImage from 'assets/spb.jpg';

export const Footer = () => {
  return (
    <Container>
      <Image src={spbImage} />
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;
  display: grid;
  justify-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100vw;
  height: 140px;
  object-fit: cover;
  object-position: 0 45%;
`;
