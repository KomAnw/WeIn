import mapPNG from 'assets/map.png';
import { useEffect, useState } from 'react';
import { HeadingSecond } from 'src/design/Fonts';
import styled from 'styled-components';

export const Hero = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <Container>
      <Image src={mapPNG} />
      <TextContainer>
        <Text>Город</Text>
        <SpecialText opacity={opacity}>нашей</SpecialText>
        <Text>Любви</Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const Image = styled.img`
  max-width: 100vw;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  justify-items: center;
`;
const Text = styled(HeadingSecond)`
  text-transform: uppercase;
  font-size: 45px;
`;
const SpecialText = styled.p<{ opacity: number }>`
  opacity: ${({ opacity }) => opacity};
  font-family: 'Gogol';
  color: rgb(0 0 0);
  font-size: 70px;
  line-height: 0.4;
  font-style: italic;
  letter-spacing: 9px;
  transform: translate(0px, -10px);
  transition: all 3s ease;
`;
