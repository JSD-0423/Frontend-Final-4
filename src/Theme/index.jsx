import { createTheme } from '@mui/material/styles';
import { orange, purple, green } from '@mui/material/colors';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import { color } from '@mui/system';

export const theme = createTheme({
  status: {
    danger: orange[500]
  },
  palette: {
    primary: {
      main: '#1B4B66'
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {
    h1: { fontFamily: 'Inter', fontSize: 34, fontWeight: 600, color: ' #13101E' }
  }
});
