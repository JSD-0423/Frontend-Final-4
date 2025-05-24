import { CustomBreadcrumbs, ErrorMessage, Spinner } from '../../shared';
import { Toolbar } from '@mui/material';
import ProductGallary from './components/ProductGallary';
import ProductDetails from './components/ProductDetails';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';
import CustomTaps from '../../shared/components/CustomTaps/CustomTaps';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchApi(`/products/${id}`);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <CustomBreadcrumbs />
      {!loading && data ? (
        <>
          <Toolbar sx={{ display: 'flex', gap: '1rem' }}>
            <ProductGallary gallery={data.images} />
            <ProductDetails
              data={data}
              name={data.name}
              rating={data.rating}
              description={data.description}
              price={data.price}
              productId={data.id}
            />
          </Toolbar>
          <Toolbar>
            <CustomTaps description={data.description} />
          </Toolbar>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ProductDetailsPage;
