import { useState } from 'react';

// import local components
import SnackBar from '../core/components/common/SnackBar';
import LoginPage from '../core/components/Login_Register/LoginPage';

// import local constants
import { snackBarInit } from '../core/constants/common.const';
import { InterfaceSnackBarState } from '../core/interfaces/commons';

const Login = () => {
  const [snackBarState, setSnackBarState] =
    useState<InterfaceSnackBarState>(snackBarInit);
  return (
    <>
      <LoginPage setSnackBarState={setSnackBarState} />
      <SnackBar
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default Login;
