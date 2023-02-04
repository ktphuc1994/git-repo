import { createContext, useContext, useState } from 'react';
import { BasePropsInterface } from '../interfaces/commons/BaseProps.interface';

// import local interface
import { InterfaceRepo, InterfaceRepoContext } from '../interfaces/git';

const RepoContext = createContext<InterfaceRepoContext | null>(null);

const RepoProvider = ({ children }: BasePropsInterface) => {
  const [repo, setRepo] = useState<InterfaceRepo | null>(null);
  return (
    <RepoContext.Provider value={{ repo, setRepo }}>
      {children}
    </RepoContext.Provider>
  );
};

const useRepoContext = () => useContext(RepoContext);

export { useRepoContext, RepoProvider };
