import { Dispatch, SetStateAction } from 'react';

export interface InterfaceRepo {
  name: string;
  html_url: string;
  description: string;
}

export interface InterfaceRepoContext {
  repo: InterfaceRepo | null;
  setRepo: Dispatch<SetStateAction<InterfaceRepo | null>>;
}
