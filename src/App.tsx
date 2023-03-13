import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Timer } from './components/Timer';
import { MainFont } from './design/Fonts';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Main as MainSection } from './sections/Main';
import { Map } from './sections/Map';
import { Poem } from './sections/Poem';
import { Schedule } from './sections/Schedule';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 750);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return <Text>К сожалению приложение работает только на мобильных устройствах :(</Text>;
  }

  return (
    <>
      <Header />
      <Hero />
      <Timer />
      <MainSection />
      <Schedule />
      <Map />
      <Poem />
      <Footer />
    </>
  );
}

export default App;

const Text = styled(MainFont)`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;
