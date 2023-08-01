import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function OrderSummaryTable({ subTotal, discount, deliveryFee }) {
  return (
    <div style={{ maxWidth: '30%', width: '100%' }}>
      <TableContainer style={{ marginBottom: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Order Summary</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ border: '0' }}>Sub Total</TableCell>
              <TableCell style={{ border: '0' }} align="right">
                ${subTotal}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: '0' }}>Discount</TableCell>
              <TableCell style={{ border: '0' }} align="right">
                -${discount}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ border: '0' }}>Delivery Fee</TableCell>
              <TableCell style={{ border: '0' }} align="right">
                -${deliveryFee}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', border: '0' }}>Grand Total</TableCell>
              <TableCell style={{ border: '0' }} align="right">
                ${Number(subTotal - discount + deliveryFee).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex' }}>
        <Button variant="contained" style={{ margin: '10px' ,width:'200px',textTransform:'inherit'}}>
          Place Order
        </Button>
        <Button variant="outlined" style={{ margin: '10px' ,width:'200px',textTransform:'inherit'}}>
          Continue Shoping
        </Button>
      </div>
    </div>
  );
}
export default OrderSummaryTable;
