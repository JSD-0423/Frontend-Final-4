import React from 'react';
import { ImageBanner, ProductBox, ProductInfo, ProductInfoBox } from './SpecialProdcutBannerStyles';

const SpecialProductBanner = ({ imgUrl }) => {
  return (
    <ProductBox>
      <ProductInfoBox>
        <ProductInfo variant="body3">Limited Edition</ProductInfo>
      </ProductInfoBox>
      <ImageBanner src={imgUrl} />
    </ProductBox>
  );
};

export default SpecialProductBanner;
