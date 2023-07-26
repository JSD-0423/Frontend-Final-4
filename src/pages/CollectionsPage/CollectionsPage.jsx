import React from 'react';
import { CustomBreadcrumbs } from '../../shared';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import ImageWithTextBanner from '../../shared/components/ImageWithTextBanner';
import heroimage from '../../assets/images/heroimage.png'

const CollectionsPage = () => {
  return (
    <div>
      <ImageWithTextBanner imgSrc={heroimage}/>
      <CustomBreadcrumbs />
      <ProductsContainer />
    </div>
  );
};

export default CollectionsPage;
