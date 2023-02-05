import { Dispatch, SetStateAction } from 'react';
import { InterfaceSnackBarState } from '../commons';

export interface InterfaceLoginPageComponent {
  setSnackBarState: Dispatch<SetStateAction<InterfaceSnackBarState>>;
}
