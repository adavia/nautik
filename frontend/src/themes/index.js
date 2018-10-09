const gray = '#e0e1e2';
const lightgray = '#cacbcd';
const yellow = '#FFB400';
const grayLight = '#4f5456';

const theme = {
  fonts: {
    Raleway: 'Raleway, sans-serif',
    Dosis: 'Dosis, sans-serif;'
  },
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    gray,
    lightgray,
    yellow,
    grayLight
  },
  buttons: {
    primary: {
      color: 'rgba(0,0,0,.6)',
      backgroundColor: gray,
    },
    outline: {
      color: gray,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
  },
}

export default theme;