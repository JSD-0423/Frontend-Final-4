import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/index';
import { Typography } from '@mui/material';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home page</div>} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
