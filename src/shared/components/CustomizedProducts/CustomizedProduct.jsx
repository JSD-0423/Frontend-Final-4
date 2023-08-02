import React from 'react';
import {
  ProductBox,
  ImageStyle,
  ProductsSpecification,
  ArrowButton,
  ArrowIcon
} from './CustomizedProductStyles';
import { Link } from 'react-router-dom';

const CustomizedProduct = ({
  imgUrl,
  productsDetails,
  variant,
  textColor,
  backGround,
  arrowColor,
  path
}) => {
  return (
    <ProductBox>
      <ImageStyle src={imgUrl} />
      <ProductsSpecification variant={variant} color={textColor}>
        {productsDetails}
      </ProductsSpecification>
      <Link to={path}>
        <ArrowButton sx={{ background: backGround }} color={arrowColor}>
          <ArrowIcon sx={{ fontSize: '52px', lineHeight: '52px' }} />
        </ArrowButton>
      </Link>
    </ProductBox>
  );
};

export default CustomizedProduct;
