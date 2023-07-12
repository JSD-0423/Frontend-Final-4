import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/system';

const carouselItems = [
  {
    id: 1,
    name: 'Grande',
    title: 'Blossom Pouch ',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 2,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 3,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 4,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 5,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 6,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 7,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 8,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 9,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  }
];

function MyCarousel() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  const getItemsNumber = (width) => {
    switch (true) {
      case width > 1720:
        return 6;
      case width > 1480 && width < 1720:
        return 5;
      case width < 1480 && width > 1204:
        return 4;
      case width < 1204 && width > 878:
        return 3;
      case width <= 878 && width > 598:
        return 2;
      default:
        return 1;
    }
  };

  const sliderItems = getItemsNumber(screenSize.width);
  const items = [];

  for (let i = 0; i < carouselItems.length; i += sliderItems) {
    items.push(
      <Box sx={{ display: 'flex', gap: '40px' }}>
        {carouselItems.slice(i, i + sliderItems).map((item, index) => {
          return (
            <ProductCard
              productId={item.id}
              key={item.id}
              productName={item.name}
              ProductPrice={item.price}
              ProductSpecifications={item.title}
            />
          );
        })}
      </Box>
    );
  }

  return (
    <Carousel
      animation="slide"
      autoPlay={false}
      timeout={300}
      indicators={false}
      sx={{ width: '100%' }}>
      {items}
    </Carousel>
  );
}

export default MyCarousel;
