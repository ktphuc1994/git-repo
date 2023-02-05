import { Dispatch, SetStateAction } from 'react';
import { InterfaceRepo } from '../git';

export interface InterfaceRepoContext {
  repo: InterfaceRepo | null;
  setRepo: Dispatch<SetStateAction<InterfaceRepo | null>>;
  gitEtag: string;
  setGitEtag: Dispatch<SetStateAction<string>>;
}
