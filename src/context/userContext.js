import React ,{ useState } from 'react';

export const UserContext =React.createContext([{}, () => {}]);

export const AuthContext = React.createContext({
  authenticated: false,
  setAuthenticated: (auth) => {}
}); 



export const UserContextProvider = (props) => { 
    const [state, setState] = useState({});
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}


