import { createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

export const theme = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    primary: {
      main: '#1B4B66',
      black: 'black',
      white: 'white',
      grey: '#F4F4F4'
    },
    secondary: {
      main: '#A53F64'
    },
    text: {
      lightText: '#B6B6B6'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontSize: 34,
      fontWeight: 600,
      color: ' #13101E',
      lineHeight: '44px'
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 400,
      color: ' #626262',
      lineHeight: '20px'
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 500,
      color: ' #13101E',
      lineHeight: '20px'
    },
    body3: {
      fontFamily: 'Inter',
      fontSize: 52,
      fontWeight: 700,
      color: ' #97451F',
      lineHeight: '68px'
    },
    body4: {
      fontFamily: 'Inter',
      fontSize: 40,
      fontWeight: 700,

      lineHeight: '52px'
    },
    breakpoints: {
      values: {
        xs: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    }
  }
});
