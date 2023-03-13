import styled from 'styled-components';
import { Heading } from 'src/design/Fonts';
import { Anchor } from 'src/components/Anchor';

export const Main = () => {
  return (
    <Container>
      <Anchor id="text" />
      <Card>
        <Title>Дорогой Гость!</Title>
        <FirstDescription>
          Скоро наступит очень важный для нас день - мы станем семьёй. <br /> Мы будем искренне рады разделить этот день
          с Вами.
        </FirstDescription>
        <Date>10 июня 2023 года</Date>
        <SecondDescription>
          Ждём Вас в 15:00 во Дворце бракосочетания №1 (Английская наб., 28)
          <br />
          <br />
          После церемонии трансфер доставит Вас до ресторана, где состоится свадебный ужин.
        </SecondDescription>
        <Names>
          Ваши
          <br /> Герман и Мария
        </Names>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 10px 0;
`;

const Card = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: #c2cfb985;

  padding: 15px;
  box-shadow: rgba(34, 60, 80, 0.2) 0px 5px 10px 2px;
`;

const Title = styled(Heading)`
  margin: 0 auto;
  font-size: 33px;
  text-align: center;
  width: 150px;
`;
const FirstDescription = styled.p`
  margin: 10px 0;
  font-size: 19px;
  font-family: Cormorant;
  text-align: justify;
`;
const Date = styled(Heading)`
  margin: 10px 0;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
`;
const SecondDescription = styled.p`
  margin: 10px 0;
  font-size: 19px;
  font-family: Cormorant;
  text-align: justify;
`;
const Names = styled(Heading)`
  margin: 0 auto;
  font-size: 33px;
  text-align: center;
`;
