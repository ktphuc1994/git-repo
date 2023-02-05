import { Dispatch, SetStateAction } from 'react';

export interface InterfaceSnackBarState {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
}

export interface InterfaceSnackBarComponents {
  snackBarState: InterfaceSnackBarState;
  setSnackBarState: Dispatch<SetStateAction<InterfaceSnackBarState>>;
}
