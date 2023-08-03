import React from 'react';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import Table from '@mui/material/Table';
import { Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ImageDescription } from './style';

function ImageWithSideInfo({ row }) {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={row.imgsrc.cardImage} />
      </div>
      <ImageDescription>
        <h5>{row.name}</h5>
        <p>{row.description}</p>
        <p>Qty- {row.Qty}</p>
      </ImageDescription>
    </div>
  );
}

export default ImageWithSideInfo;
