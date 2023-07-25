import styled from "@emotion/styled";

export const ImageWithTextBannerStyle = styled('div')(({ theme }) => ({
    position: 'relative'
  }));
  export const CollectionImg = styled('img')(({ theme }) => ({
    width: '100%',
     paddingInline: '2%'
  }));
  export const TextOnCollectionImg = styled('div')(({ theme }) => ({
   position: 'absolute', 
   top: '110px', 
   right: '120px',
   fontSize:'35px' 
  }));
  export const TextParagraph = styled('div')(({ theme }) => ({
    fontSize:'70px',
    paddingTop:'20px'
    
   }));