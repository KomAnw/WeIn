import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Gogol";
    src: url('/gogol.ttf');
    src: local('Gogol'),
        url("/gogol.ttf"), format('ttf');
  }


  body * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
