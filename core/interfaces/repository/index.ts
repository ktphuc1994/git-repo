import { RefObject } from 'react';
import { BasePropsInterface } from '../commons/BaseProps.interface';
import { InterfaceRepo } from '../git';

export interface InterfaceFilterBarComponents extends BasePropsInterface {
  projectNameRef: RefObject<HTMLInputElement>;
  handleSearchProject: () => void;
}

export interface InterfaceRepoDetailComponent extends BasePropsInterface {
  repo: InterfaceRepo;
}
