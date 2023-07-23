import React from 'react';
import { CustomBreadcrumbs } from '../../shared';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

const CollectionsPage = () => {
  return (
    <div>
      <CustomBreadcrumbs />
      <ProductsContainer />
    </div>
  );
};

export default CollectionsPage;
