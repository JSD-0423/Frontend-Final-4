import { ImageCardContainer, ImageCardTypography, ImageStyle, LinearGrad } from './style';

function ImageCard({ imageUrl, imageText, width, height }) {
  return (
    <ImageCardContainer width={width} height={height}>
      <ImageStyle src={imageUrl} />
      <ImageCardTypography>{imageText}</ImageCardTypography>
      <LinearGrad></LinearGrad>
    </ImageCardContainer>
  );
}

export default ImageCard;
