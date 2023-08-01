import React from 'react';
import Table from '@mui/material/Table';
import {
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import ImageWithSideInfo from '../ImageWithSideInfo';
import { TableContainerStyle } from './style';

function MyCartTable({cart}) {
 
  return (
          <TableContainerStyle>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    style={{position:'relative'}}
                    >
                    <TableCell component="th" scope="row" style={{border:'0'}}>
                      <ImageWithSideInfo row={row} />
                    </TableCell>
                    <TableCell component="th" scope="row" align="right" style={{border:'0'}}>
                      {row.price}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right" style={{border:'0'}}>
                      {row.Qty}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right" style={{border:'0'}}>
                      <div>{row.subTotal}</div>
                    </TableCell>
                    <Button variant="text" style={{textTransform:'inherit',position:'absolute',right:'10px',bottom:'10px',color:'#B00020',fontWeight:'bold',textDecoration:'underline'}}>Remove</Button>
                  </TableRow>
                  
                ))}
              </TableBody>
            </Table>
          </TableContainerStyle>
  );
}

export default MyCartTable;