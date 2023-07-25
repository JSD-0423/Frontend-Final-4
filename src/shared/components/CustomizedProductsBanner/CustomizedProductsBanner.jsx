import React from 'react';
import { ProductsBanner } from './CustomizedProductsBannerstyle';
import CustomizedProduct from '../CustomizedProducts/CustomizedProduct';
const CustomizedProductsBanner = () => {
  return (
    <ProductsBanner>
      <CustomizedProduct
        imgUrl={'../assets/images/Group 139.png'}
        productsDetails={'15% Discount'}
        variant={'body4'}
        textColor={'secondary'}
        backGround={'white'}
        arrowColor={'secondary'}
      />
      <CustomizedProduct
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
