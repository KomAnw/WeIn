import { createRoot } from 'react-dom/client';
import App from './App';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './GlobalStyles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <>
    <Normalize />
    <GlobalStyles />
    <App />
  </>
);
