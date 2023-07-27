import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { CustomBreadcrumbs } from '../../shared';

const ProductDetailsPage = () => {
  const { productId } = useParams();

  console.log(productId);

  return (
    <div>
      <CustomBreadcrumbs />
      ProductDetailsPage
    </div>
  );
};

export default ProductDetailsPage;
