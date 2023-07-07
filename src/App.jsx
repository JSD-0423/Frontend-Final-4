import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Theme } from './Theme/index';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import ProductCard from './Components/ProductCard/ProductCard';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <NewArrivals>
        <ProductCard />
      </NewArrivals>
    </ThemeProvider>
  );
}

export default App;
