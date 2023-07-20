import React from 'react';
import { CustomBreadcrumbs } from '../../shared';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

const CollectionPage = () => {
  return (
    <div>
      <CustomBreadcrumbs />
      <ProductsContainer />
    </div>
  );
};

export default CollectionPage;
