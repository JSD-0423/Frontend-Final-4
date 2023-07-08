import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, useTheme } from '@mui/material';
import {
  CardsDetailsContainer,
  CardsTextContainer,
  CardsActionsContainer,
  ProductItemCard
} from './ProductCardStyle';

export default function ProductCard() {
  return (
    <ProductItemCard>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        sx={{ backgroundColor: 'gray', borderRadius: 2 }}
      />
      <CardsDetailsContainer>
        <CardsTextContainer>
          <Typography variant="body2" color="text.secondary">
            hfhfhfh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ASASAS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ASASAS
          </Typography>
        </CardsTextContainer>
        <CardsActionsContainer>
          <button></button>
        </CardsActionsContainer>
      </CardsDetailsContainer>
    </ProductItemCard>
  );
}
