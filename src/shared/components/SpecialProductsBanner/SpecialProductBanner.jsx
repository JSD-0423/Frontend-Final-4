import React from 'react';
import { ImageBanner, ProductBox, ProductInfo, ProductInfoBox } from './SpecialProdcutBannerStyles';
import { Link } from 'react-router-dom';

const SpecialProductBanner = ({ imgUrl, path }) => {
  return (
    <Link to={path}>
      <ProductBox>
        <ProductInfoBox>
          <ProductInfo variant="body3">Limited Edition</ProductInfo>
        </ProductInfoBox>
        <ImageBanner src={imgUrl} />
      </ProductBox>
    </Link>
  );
};

export default SpecialProductBanner;
