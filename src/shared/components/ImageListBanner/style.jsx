import { Box, ImageList, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const HandpickedCollectionsBox = styled(Box)({
  width: '100%'
});
export const HandpickedCollectionsContainer = styled(Box)(({ paddingTop }) => ({
  paddingInline: '20px',
  paddingTop: paddingTop,
  paddingBottom: '20px'
}));
export const ImageListBannerHeader = styled(Typography)({
  overflow: 'hidden',
  fontWeight: '600',
  textOverflow: 'ellipsis'
});
export const ImageListStyle = styled(ImageList)({
  paddingTop: '25px',
  paddingBottom: '20px'
});
