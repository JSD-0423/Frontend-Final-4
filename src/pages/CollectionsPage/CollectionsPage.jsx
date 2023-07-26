import React, { useEffect, useState } from 'react';
import { CustomBreadcrumbs } from '../../shared';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import { useLocation } from 'react-router-dom';
import { getRequest } from '../../services/ApiService';
import { useFetchApi } from '../../hooks/useFetchApi';

const CollectionsPage = () => {
  const { search } = useLocation();
  const categoryId = search.slice(search.lastIndexOf('=') + 1);
  // const { data, loading, error } = useFetchApi(`/categories/${categoryId}`);

  return (
    <div>
      <CustomBreadcrumbs />
      <ProductsContainer categoryId={categoryId} />
    </div>
  );
};

export default CollectionsPage;
