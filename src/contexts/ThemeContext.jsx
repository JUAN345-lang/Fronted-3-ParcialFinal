import React, { useReducer } from 'react'
import { createContext } from "react";

export const ThemeContext = createContext({});

export const actions = {
  change: 'change',
}

function reducer(state, action) {
  switch (action.type) {
    case actions.change:
      return { theme: state.theme === 'light' ? 'dark': 'light'}
    default:
      throw new Error("Action doesn't exist")
  }
}

export const ThemeProvider = (props) => {
  const [theme, dispatch] = useReducer(reducer,{theme: "light"})

  
  return (
    <ThemeContext.Provider value={{theme, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
