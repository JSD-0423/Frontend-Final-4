import { CollectionImg, ImageWithTextBannerStyle, TextOnCollectionImg, TextParagraph } from "./style";

function ImageWithTextBanner({ imgSrc, headerText, Description }) {
  return (
    <ImageWithTextBannerStyle>
      <CollectionImg src={imgSrc}/>
      <TextOnCollectionImg>
        <h1>{headerText}</h1>
        <TextParagraph>{Description}</TextParagraph>
      </TextOnCollectionImg>
    </ImageWithTextBannerStyle>
  );
}

export default ImageWithTextBanner;
