'use client';
import { createContext,useReducer } from "react";

const initialState = {
     todos:[]
};

export const TodosContext = createContext(initialState);

const TodosReducer = (state, action) => {
    switch (action.type) {
      case "FETCHTODOS":
        return  {...state , ...state.todos=action.payload}
      case "ADDTODO" : 
        return {...state , todos:[...state.todos ,action.payload]}
      default:
        return state;
    }
  };

export const TodosContextProvider = ({children}) => {
 
const [state , dispatch] = useReducer(TodosReducer,initialState);

    const value = {
            todos : state.todos,
            dispatch
    }  

    return  <TodosContext.Provider value={value}>
              {children}
            </TodosContext.Provider>
}