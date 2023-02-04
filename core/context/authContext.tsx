import { createContext, useContext, useState } from 'react';

// import local interface
import { InterfaceAuthContext } from '../interfaces/commons';
import { BasePropsInterface } from '../interfaces/commons/BaseProps.interface';

// import local constants
import { localStoreConst } from '../constants/localStore.const';

const AuthContext = createContext<InterfaceAuthContext | null>(null);

const AuthProvider = ({ children }: BasePropsInterface) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const setAuthTokenInfo = (token: string) => {
    localStorage.setItem(localStoreConst.AUTH_TOKEN, token);
    setAuthToken(token);
  };

  const isAuth = () => {
    if (authToken) return true;
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthTokenInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
