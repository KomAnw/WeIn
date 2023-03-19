import { Anchor } from 'src/components/Anchor';
import { Heading, MainFont, HeadingSecond } from 'src/design/Fonts';
import styled from 'styled-components';

const scheduleDayOne = [
  {
    time: '15:00',
    subTitle: 'Церемония бракосочетания',
    description: 'Английская набережная, 28',
    details: 'церемония пройдет в Большом зале Дворца бракосочетания №1',
  },
  {
    time: '17:00',
    subTitle: 'Свадебный ужин в ресторане "legran"',
    description: 'Милионная ул, 4/1Б',
  },
];

const scheduleDayTwo = [
  {
    time: '13:00',
    subTitle: 'Прогулка на катере',
    description: 'Набережная реки Фонтанки, 64',
    details: '',
  },
];

export const Schedule = () => {
  return (
    <Container>
      <Anchor id="schedule" />
      <Title>Свадебное расписание</Title>
      <EventsContainer>
        <DayTitle>10.06.2023</DayTitle>
        {scheduleDayOne.map(({ subTitle, description, details, time }) => (
          <Event key={time}>
            <Time>{time}</Time>
            <TextContainer>
              <SubTitle>{subTitle}</SubTitle>
              <Text>{description}</Text>
              {details && <Text>{details}</Text>}
            </TextContainer>
          </Event>
        ))}
        <DayTitle>11.06.2023</DayTitle>
        {scheduleDayTwo.map(({ subTitle, description, details, time }) => (
          <Event key={time}>
            <Time>{time}</Time>
            <TextContainer>
              <SubTitle>{subTitle}</SubTitle>
              <Text>{description}</Text>
              {details && <Text>{details}</Text>}
            </TextContainer>
          </Event>
        ))}
      </EventsContainer>
    </Container>
  );
};

const DayTitle = styled(HeadingSecond)`
  text-align: center;
  font-weight: bold;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Title = styled(Heading).attrs({ as: 'h3' })`
  margin: 20px auto;
  font-size: 33px;
  text-align: center;
`;

const EventsContainer = styled.div`
  display: grid;
  gap: 30px;
`;
const Event = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 40px;
`;
const TextContainer = styled.div`
  display: grid;
  gap: 10px;
`;
const Time = styled(MainFont)`
  font-weight: bold;
`;
const SubTitle = styled.p`
  font-size: 18px;
  font-family: 'Poiret One', cursive;
`;
const Text = styled.p`
  font-size: 16px;
  font-family: Cormorant;
`;
