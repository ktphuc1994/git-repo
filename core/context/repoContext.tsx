import { createContext, useContext, useState } from 'react';
import { BasePropsInterface } from '../interfaces/commons/BaseProps.interface';

// import local interface
import { InterfaceRepo, InterfaceRepoContext } from '../interfaces/git';

const RepoContext = createContext<InterfaceRepoContext | null>(null);

export function RepoProvider({ children }: BasePropsInterface) {
  const [repo, setRepo] = useState<InterfaceRepo | null>(null);
  return (
    <RepoContext.Provider value={{ repo, setRepo }}>
      {children}
    </RepoContext.Provider>
  );
}

export function useRepoContext() {
  return useContext(RepoContext);
}
