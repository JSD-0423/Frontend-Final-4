import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/index';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NewArrivals from './shared/components/NewArrivals/NewArrivals';
import HomePage from './pages/HomePage/HomePage';
import NotFounPage from './pages/NotFoundPage/NotFounPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFounPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
