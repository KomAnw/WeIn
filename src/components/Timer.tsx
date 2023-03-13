import { useEffect, useState } from 'react';
import { MainFont } from 'src/design/Fonts';
import { getTimeRemaining } from 'src/utils/getTime';
import styled from 'styled-components';
import { Anchor } from './Anchor';

const targetDate = '2023-06-10T15:00:00';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState([
    { name: 'недель', value: '0' },
    { name: 'дней', value: '0' },
    { name: 'часов', value: '0' },
    { name: 'минут', value: '0' },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Anchor id="time" />
      <Container>
        {timeLeft.map(({ name, value }) => (
          <Cell key={name}>
            <Number>{value}</Number>
            <Text>{name}</Text>
          </Cell>
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 17px auto;
`;
const Cell = styled.div`
  display: grid;
  justify-items: center;
`;
const Number = styled(MainFont)`
  font-weight: bold;
`;
const Text = styled(MainFont)``;
