import react, {createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // const registerValidation = (name, postcode, address, email, password, phonenumber){

  // }
  return (
    <AuthContext.Provider value={'test value changed'}>
      {children}
    </AuthContext.Provider>
  );
};
