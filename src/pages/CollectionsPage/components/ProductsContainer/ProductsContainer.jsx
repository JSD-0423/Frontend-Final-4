import { Grid, Toolbar, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import { useFetchApi } from '../../../../hooks/useFetchApi';
import { Link, useLocation } from 'react-router-dom';
import { ErrorMessage, ProductCard, Spinner } from '../../../../shared';

const ProductsContainer = ({ categoryId }) => {
  const { pathname } = useLocation();
  const [pagination, setPagination] = useState(1);

  const { data, loading, error } =
    pathname === '/limited-edition' ||
    pathname === '/new-arrivals' ||
    pathname === '/discount' ||
    pathname === '/popular'
      ? useFetchApi(
          `/products?perPage=2&page=${pagination}/${
            (pathname === '/limited-edition' && 'limited-edition') ||
            (pathname === '/new-arrivals' && 'new-arrivals') ||
            (pathname === '/discount' && '?discount=15') ||
            (pathname === '/popular' && 'popular')
          }`
        )
      : useFetchApi(`/categories/${categoryId}/products?perPage=2&page=${pagination}`);

  if (!loading && data?.data?.length === 0)
    return (
      <Typography
        variant="body2"
        color={'error'}
        sx={{ height: '11rem' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        No Items Found!
      </Typography>
    );
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Toolbar sx={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {!loading ? (
        <Grid container spacing={3}>
          {data?.data?.map((product) => (
            <Grid
              key={product.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4}
              alignItems={'center'}
              display={'flex'}>
              <Link to={`/products/${pathname.slice(1)}/${product.id}`}>
                <ProductCard
                  productId={product.id}
                  productName={product.name}
                  productPrice={product.price}
                  productSpecifications={'Blossom Pouch'}
                  rating={product.rating}
                  productImage={product.images[0].image}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Spinner />
      )}
      <Pagination
        count={data?.pagination?.totalPages || 1}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => setPagination(page)}
      />
    </Toolbar>
  );
};

export default ProductsContainer;
