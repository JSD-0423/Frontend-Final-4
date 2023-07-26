import { CircularProgress, Box } from '@mui/material';

const Spinner = () => {
  return (
    <Box height={'10rem'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
