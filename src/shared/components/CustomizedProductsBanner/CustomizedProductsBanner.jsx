import React from 'react';
import CustomizedProduct from '../CustomizedProducts/CustomizedProduct';
import { ProductsBanner } from './CustomizedProductsBannerStyle';
const CustomizedProductsBanner = () => {
  return (
    <ProductsBanner>
      <CustomizedProduct
        path={'/discount'}
        imgUrl={'../assets/images/Group 139.png'}
        productsDetails={'15% Discount'}
        variant={'body4'}
        textColor={'secondary'}
        backGround={'white'}
        arrowColor={'secondary'}
      />
      <CustomizedProduct
        path={'/popular'}
        imgUrl={'../assets/images/skincare 1.png'}
        productsDetails={'Popular'}
        variant={'body4'}
        textColor={'primary'}
        backGround={'#B6B6B6'}
        arrowColor={'primary'}
      />
    </ProductsBanner>
  );
};

export default CustomizedProductsBanner;
