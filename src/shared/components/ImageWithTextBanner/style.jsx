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
   top: '27%', 
   right: '7%',
   fontSize:'2.7rem' 
  }));
  export const TextParagraph = styled('div')(({ theme }) => ({
    fontSize:'5rem',
    paddingTop:'20px'
    
   }));