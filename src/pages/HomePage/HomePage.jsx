import React from 'react';
import personalCare from '../../assets/images/personalCare.png';
import handbags from '../../assets/images/handbags.png';
import wristwatches from '../../assets/images/wristwatches.png';
import sunGlasses from '../../assets/images/sunGlasses.png';
import ImageListBanner from '../../shared/components/ImageListBanner';
import BIBA from '../../assets/images/BIBA.png';
import Chanel from '../../assets/images/Chanel_logo.png';
import DolceGabbana from '../../assets/images/Dolce_&_Gabbana.png';
import HM from '../../assets/images/H&M-Logo.png';
import zara from '../../assets/images/Zara.png';
import Prada from '../../assets/images/Prada.png';
// import NewArrivals from '../../shared/components/NewArrivals/NewArrivals';
import { CustomCarousel } from '../../shared';
import { theme } from '../../Theme/index';
import SpecialProductBanner from '../../shared/components/SpecialProductsBanner/SpecialProductBanner';
const handpickedCollection = [
  {
    imageurl: personalCare,
    name: 'Personal Care'
  },
  {
    imageurl: handbags,
    name: 'Handbags'
  },
  {
    imageurl: wristwatches,
    name: 'Wrist Watches'
  },
  {
    imageurl: sunGlasses,
    name: 'Sun Glasses'
  }
];
const brands = [
  {
    imageurl: BIBA
  },
  {
    imageurl: Chanel
  },
  {
    imageurl: DolceGabbana
  },
  {
    imageurl: HM
  },
  {
    imageurl: Prada
  },
  {
    imageurl: zara
  }
];
function HomePage() {
  return (
    <div>
      <CustomCarousel />
      {/* <NewArrivals /> */}
      <ImageListBanner
        images={handpickedCollection}
        cols={4}
        backgroundColor={theme.palette.primary.main}
        headerText={'Handpicked Collections'}
        headerColor={theme.palette.primary.white}
        gap={30}
        paddingTop={'35px'}
      />
      <ImageListBanner
        icons={brands}
        cols={6}
        headerColor={theme.palette.primary.black}
        headerText={'Shop by Brands'}
        gap={50}
        paddingTop={'60px'}
      />
      <SpecialProductBanner imgUrl={'../assets/images/BackGround.png'} />
    </div>
  );
}

export default HomePage;
