import { CollectionImg, ImageWithTextBannerStyle, TextOnCollectionImg, TextParagraph } from "./style";

function ImageWithTextBanner({ imgSrc, headerText, Description }) {
  return (
      <CollectionImg src={imgSrc}/>
  );
}

export default ImageWithTextBanner;
