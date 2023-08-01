import './App.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/index';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFounPage from './pages/NotFoundPage/NotFounPage';
import { Navbar } from './shared';
import Footer from './shared/components/Footer';
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import MyCart from './shared/components/MyCart';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryName" element={<CollectionsPage />} />
          <Route path="/products/:categoryName/:id" element={<ProductDetailsPage />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="*" element={<NotFounPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
