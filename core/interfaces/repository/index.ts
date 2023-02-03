import { BasePropsInterface } from '../commons/BaseProps.interface';
import { InterfaceRepo } from '../git';

export interface InterfaceRepoDetailComponent extends BasePropsInterface {
  repo: InterfaceRepo;
}
