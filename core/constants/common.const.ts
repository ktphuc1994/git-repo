import { InterfaceSnackBarState } from '../interfaces/commons';

interface InterfaceCommonConst {
  sidebarWidth: number;
  customColor: Array<
    'darkMBlue' | 'brightRed' | 'darkOrange' | 'limeGreen' | 'darkPink'
  >;
}

export const commonConst: InterfaceCommonConst = {
  sidebarWidth: 240,
  customColor: [
    'darkMBlue',
    'brightRed',
    'darkOrange',
    'limeGreen',
    'darkPink',
  ],
};

export const snackBarInit: InterfaceSnackBarState = {
  open: false,
  message: '',
  severity: 'success',
};
