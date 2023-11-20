import React, { createContext, useContext, useState } from 'react';

const GlobalTheme = createContext();

export const useGlobalTheme = ()=>useContext(GlobalTheme);


const ThemeContext = ({children}) => {

    const [theme, setTheme] = useState(false);

    const changeTheme=()=>setTheme(!theme);
  return (
    <GlobalTheme.Provider value={{theme, changeTheme}}>
      {children}
    </GlobalTheme.Provider>
  )
}

export default ThemeContext