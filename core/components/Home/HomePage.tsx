import { Box } from '@mui/system';

const transformHeight = '50px';

const HomePage = () => {
  return (
    <Box
      component="div"
      sx={{
        pt: { lg: transformHeight },
      }}
    ></Box>
  );
};

export default HomePage;
