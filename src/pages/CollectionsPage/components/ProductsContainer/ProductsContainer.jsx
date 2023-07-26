import { Grid, Toolbar, Pagination } from '@mui/material';
import { ProductCard } from '../../../../shared';
import { useEffect, useState } from 'react';
import { getRequest } from '../../../../services/ApiService';

const ProductsContainer = ({ categoryId }) => {
  const [products, setProducts] = useState(null);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getRequest(
        `/categories/${categoryId}/products?perPage=2&page=${pagination}`
      );
      console.log(res);
      setProducts(res);
    };

    // fetchData();
  }, [categoryId, pagination]);

  return (
    <Toolbar sx={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <Grid container spacing={3}>
        {products?.data?.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            alignItems={'center'}
            display={'flex'}
            justifyContent={'center'}>
            <ProductCard
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              productSpecifications={'Blossom Pouch'}
              rating={product.rating}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={products?.pagination?.totalPages || 3}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => setPagination(page)}
      />
    </Toolbar>
  );
};

export default ProductsContainer;
