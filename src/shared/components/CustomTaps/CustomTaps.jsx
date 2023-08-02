import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styled from '@emotion/styled';

const StyledTab = styled(Tab)(({ theme }) => ({
  padding: '.3rem 1rem',
  minHeight: 0,
  textTransform: 'none',
  fontSize: '.8rem',
  borderRadius: '4px',
  margin: '.5rem',
  '&.Mui-selected': {
    backgroundColor: '#1B4B66',
    color: '#FFF'
  }
}));

const CustomTaps = ({ description }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', mt: 3 }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: '#F1F1F1',
            borderRadius: '10px'
          }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <StyledTab label="Product Description" value="1" />
            <StyledTab label="Related Products" value="2" />
            <StyledTab label="Ratings and Reviews" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{description}</TabPanel>
        <TabPanel value="2">Related Products</TabPanel>
        <TabPanel value="3">Ratings and Reviews</TabPanel>
      </TabContext>
    </Box>
  );
};

export default CustomTaps;
