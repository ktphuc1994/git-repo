// import MUI Theme and Type
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { Dispatch, SetStateAction } from 'react';

// import local interface
import { BasePropsInterface } from './BaseProps.interface';

export interface InterfaceCustomCollapse extends BasePropsInterface {
  titleClassName?: string;
  titleSx?: SxProps<Theme>;
  title?: React.ReactNode;
}

export interface InterfaceAuthContext {
  authToken: string | null;
  setAuthTokenInfo: (token: string) => void;
}

export interface InterfaceSnackBarState {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
}

export interface InterfaceSnackBarComponents {
  snackBarState: InterfaceSnackBarState;
  setSnackBarState: Dispatch<SetStateAction<InterfaceSnackBarState>>;
}
