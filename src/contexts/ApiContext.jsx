import React, { useReducer } from 'react'
import { createContext } from "react";

export const ApiContext = createContext({dentists: [], outstandings: []});

export const actions = {
  setAll: 'setAll',
  getAll: 'getAll',
  setAsOutstandings: 'setOutstanding',
  getOutstandings: 'getOutstanding',
  removeOutstanding: 'removeOutstanding'
}

function reducer(state, action) {
  switch (action.type) {
    case actions.getAll:
        return state.dentists
    case actions.setAll:
        return { ...state, dentists: action.payload }
    case actions.setAsOutstandings:
        return {...state, outstandings: action.payload}
    default:
      throw new Error("Action doesn't exist")
  }
}

export const ApiProvider = (props) => {
  const [api, dispatch] = useReducer(reducer,{ dentists: [], outstandings: [] })

  return (
    <ApiContext.Provider value={{ api, dispatch }}>
      {props.children}
    </ApiContext.Provider>
  );
}