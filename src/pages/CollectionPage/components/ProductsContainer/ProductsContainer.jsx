import { Grid, Toolbar } from '@mui/material';
import { ProductCard } from '../../../../shared';
import { productsList } from '../../../../constants';

const ProductsContainer = () => {
  return (
    <Toolbar>
      <Grid container spacing={3}>
        {productsList.map((product) => (
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
              productSpecifications={product.title}
              rating={product.rating}
            />
          </Grid>
        ))}
      </Grid>
    </Toolbar>
  );
};

export default ProductsContainer;
