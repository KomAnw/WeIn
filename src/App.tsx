import { Timer } from './components/Timer';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Main as MainSection } from './sections/Main';
import { Map } from './sections/Map';
import { Schedule } from './sections/Schedule';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Timer />
      <MainSection />
      <Schedule />
      <Map />
      <Footer />
    </>
  );
}

export default App;
