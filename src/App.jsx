import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/index';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFounPage from './pages/NotFoundPage/NotFounPage';
import { Navbar } from './shared';
import Footer from './shared/components/Footer';
import CollectionPage from './pages/CollectionPage/CollectionPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="*" element={<NotFounPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
