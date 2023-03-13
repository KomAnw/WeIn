import { Initials } from 'src/components/Initials';
import { GM } from 'src/design/Fonts';
import styled from 'styled-components';

export const Poem = () => {
  return (
    <OuterContainer>
      <DividerContainer>
        <StyledInitials />
        <Divider />
      </DividerContainer>
      <Container>
        <Text>
          <Special>"Счастье моё,</Special> <br />
          доставай свой старый путеводитель. <br />Я знаю город любви не Париж, <br />а дождливый Питер.
        </Text>
      </Container>
    </OuterContainer>
  );
};

const Divider = styled.hr`
  width: 100%;
  margin: 0 auto;
`;
const StyledInitials = styled(Initials)`
  position: absolute;
  right: 40px;
  top: -11px;
  padding: 0 8px;
  background: white;
`;

const DividerContainer = styled.div`
  position: relative;
`;

const OuterContainer = styled.div`
  margin: 30px auto 0px auto;
`;
const Container = styled.div`
  width: 80%;
  margin: 20px auto 0px auto;
`;

const Special = styled.span`
  font-family: 'Gogol';
  font-size: 30px;
`;

const Text = styled(GM)`
  font-size: 18px;
`;
