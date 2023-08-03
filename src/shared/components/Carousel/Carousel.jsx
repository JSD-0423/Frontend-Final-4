import ProductCard from '../ProductCard/ProductCard';
import React from 'react';
import { CarouselBox } from './CarouselStyle';

const Carousel = ({ data }) => {
  return (
    <CarouselBox cols={data?.length + 1} gap={40}>
      {data?.map((item) => {
        return (
          <ProductCard
            productId={item.id}
            productPrice={item.price}
            productName={item.name}
            productSpecifications={item.description}
            productImage={item.images[0].image}
          />
        );
      })}
    </CarouselBox>
  );
};

export default Carousel;
