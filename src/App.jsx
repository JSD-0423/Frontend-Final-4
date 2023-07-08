import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/index';
import { Typography } from '@mui/material';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NewArrivals from './shared/components/NewArrivals/NewArrivals';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NewArrivals />
              </div>
            }
          />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
