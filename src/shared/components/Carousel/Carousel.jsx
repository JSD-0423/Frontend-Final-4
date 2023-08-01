import ProductCard from '../ProductCard/ProductCard';
import React from 'react';
import { CarouselBox } from './CarouselStyle';

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

const Carousel = () => {
  return (
    <CarouselBox cols={carouselItems.length + 1} gap={40}>
      {carouselItems.map((item) => {
        return (
          <ProductCard
            productId={item.id}
            productPrice={item.price}
            productName={item.name}
            productSpecifications={item.content}
          />
        );
      })}
    </CarouselBox>
  );
};

export default Carousel;
