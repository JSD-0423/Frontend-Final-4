import React from 'react';
import {
  ProductBox,
  ImageStyle,
  ProductsSpecification,
  ArrowButton,
  ArrowIcon
} from './CustomizedProductStyles';

const CustomizedProduct = ({
  imgUrl,
  productsDetails,
  variant,
  textColor,
  backGround,
  arrowColor
}) => {
  return (
    <ProductBox>
      <ImageStyle src={imgUrl} />
      <ProductsSpecification variant={variant} color={textColor}>
        {productsDetails}
      </ProductsSpecification>
      <ArrowButton sx={{ background: backGround }} color={arrowColor}>
        <ArrowIcon sx={{ fontSize: '52px', lineHeight: '52px' }} />
      </ArrowButton>
    </ProductBox>
  );
};

export default CustomizedProduct;
