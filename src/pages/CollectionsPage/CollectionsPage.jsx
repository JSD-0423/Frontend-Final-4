import React from 'react';
import { CustomBreadcrumbs } from '../../shared';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import ImageBanner from '../../shared/components/ImageBanner';
import { useLocation } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';

const CollectionsPage = () => {
  const { search } = useLocation();
  const categoryId = search.slice(search.lastIndexOf('=') + 1);
  const { data } = useFetchApi(`/categories/${categoryId}`);

  return (
    <div>
      <ImageBanner imgSrc={data?.image || undefined} />
      <CustomBreadcrumbs />
      <ProductsContainer categoryId={categoryId} />
    </div>
  );
};

export default CollectionsPage;
