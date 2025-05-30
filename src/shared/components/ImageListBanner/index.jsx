import {
  HandpickedCollectionsBox,
  HandpickedCollectionsContainer,
  ImageListBannerHeader,
  ImageListStyle
} from './style';
import IconCard from '../IconCard';
import ImageCard from '../ImageCard';
import { theme } from '../../../Theme/index';
function ImageListBanner({
  images,
  icons,
  cols,
  backgroundColor,
  headerText,
  headerColor,
  gap,
  paddingTop
}) {
  return (
    <HandpickedCollectionsBox backgroundColor={backgroundColor}>
      <HandpickedCollectionsContainer paddingTop={paddingTop}>
        <ImageListBannerHeader variant={'h4'} color={headerColor}>
          {headerText}
        </ImageListBannerHeader>
        <ImageListStyle cols={cols} gap={gap}>
          {images &&
            images.map((item) => {
              return (
                <ImageCard
                  imageUrl={item.imageurl}
                  imageText={item.name}
                  width={'280'}
                  height={'280'}
                />
              );
            })}
          {icons &&
            icons.map((item) => {
              return <IconCard iconUrl={item.image} backgroundColor={theme.palette.primary.grey} />;
            })}
        </ImageListStyle>
      </HandpickedCollectionsContainer>
    </HandpickedCollectionsBox>
  );
}

export default ImageListBanner;
