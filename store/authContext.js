import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // run one time
  useEffect(() => {
    netlifyIdentity.on('login', user => {
      console.log('🚀 ~ file: authContext.js ~ line 15 ~ useEffect ~ user', user);
      setUser(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  return (
    <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;