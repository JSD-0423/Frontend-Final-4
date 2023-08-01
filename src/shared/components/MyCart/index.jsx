import React, { useEffect, useState } from 'react';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import Table from '@mui/material/Table';
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import ImageWithSideInfo from '../ImageWithSideInfo';
import cardImage from '../../../assets/images/CartItemImage.png';
import { CardHeaderText,CartContainer, CartTables } from './style';
import MyCartTable from '../MyCartTable';
import OrderSummaryTable from '../OrderSummaryTable';
const cart = [
  {
    imgsrc: { cardImage },
    name: 'Coach',
    description: 'Leather Coach Bag',
    Qty: '1',
    price: 54.69,
    subTotal: '$54.69'
  },
  {
    imgsrc: { cardImage },
    name: 'Coach',
    description: 'Leather Coach Bag',
    Qty: '1',
    price: 54.69,
    subTotal: '$54.69'
  }
];
function MyCart() {
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(13.4);
  const [deliveryFee, setDeliveryFee] = useState(0.0);

  useEffect(() => {
    let total = 0;
    cart.map((x) => {
      total += x.price;
    });
    setSubTotal(total);
  }, [subTotal]);
  return (
    <>
      <CustomBreadcrumbs />
      <CartContainer>
        <CardHeaderText>My Cart</CardHeaderText>
        <CartTables>
         <MyCartTable cart={cart}/>
         <OrderSummaryTable subTotal={subTotal} discount={discount} deliveryFee={deliveryFee}/>
        </CartTables>
      </CartContainer>
    </>
  );
}

export default MyCart;
