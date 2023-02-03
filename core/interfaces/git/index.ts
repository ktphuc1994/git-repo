import { Dispatch, SetStateAction } from 'react';

export interface InterfaceGitUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

export interface InterfaceRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  private: boolean;
  owner: InterfaceGitUser;
}

export interface InterfaceRepoContext {
  repo: InterfaceRepo | null;
  setRepo: Dispatch<SetStateAction<InterfaceRepo | null>>;
}
