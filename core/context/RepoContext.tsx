import { createContext, useContext, useState } from 'react';
import { BasePropsInterface } from '../interfaces/commons/BaseProps.interface';

// import local interface
import { InterfaceRepo } from '../interfaces/git';
import { InterfaceRepoContext } from '../interfaces/context';

const RepoContext = createContext<InterfaceRepoContext | null>(null);

const RepoProvider = ({ children }: BasePropsInterface) => {
  const [repo, setRepo] = useState<InterfaceRepo | null>(null);
  const [gitEtag, setGitEtag] = useState<string>('');
  return (
    <RepoContext.Provider value={{ repo, setRepo, gitEtag, setGitEtag }}>
      {children}
    </RepoContext.Provider>
  );
};

const useRepoContext = () => useContext(RepoContext);

export { useRepoContext, RepoProvider };
