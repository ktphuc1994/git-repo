import { SyntheticEvent } from 'react';

// import MUI Components
import { Snackbar, Alert } from '@mui/material';

// import local inteface
import { InterfaceSnackBarComponents } from '../../interfaces/commons';

const SnackBar = ({
  snackBarState,
  setSnackBarState,
}: InterfaceSnackBarComponents) => {
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarState((state) => ({ ...state, open: false }));
  };

  return (
    <Snackbar
      open={snackBarState.open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        onClose={handleClose}
        severity={snackBarState.severity}
        sx={{ width: '100%' }}
      >
        {snackBarState.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
