import React, { useEffect, useState } from 'react';
import { CustomBreadcrumbs } from '../../shared';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import { useLocation } from 'react-router-dom';
import { getRequest } from '../../services/ApiService';

const CollectionsPage = () => {
  const { search } = useLocation();
  const [categoryData, setCategoryData] = useState(null);
  const categoryId = search.slice(search.lastIndexOf('=') + 1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRequest(`/categories/${categoryId}`);
      setCategoryData(data);
    };

    // fetchData();
  }, [search]);

  return (
    <div>
      <CustomBreadcrumbs />
      <ProductsContainer categoryId={categoryId} />
    </div>
  );
};

export default CollectionsPage;
