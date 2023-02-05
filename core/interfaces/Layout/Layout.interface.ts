import { BasePropsInterface } from '../commons/BaseProps.interface';

export interface InterfaceLayout extends BasePropsInterface {
  title?: string;
  description?: string;
  icon?: string;
}

export interface InterfaceHeaderComponent extends BasePropsInterface {
  handleSidebarToggle: () => void;
}

export interface InterfaceSidebarComponents extends BasePropsInterface {
  handleSidebarClose: () => void;
  isMobileOpen: boolean;
}
