import { ThemeProvider } from '@emotion/react';
import { Theme } from './Theme/index';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={Theme}>
     <div>App *2</div>
    </ThemeProvider>
  );
}

export default App;
