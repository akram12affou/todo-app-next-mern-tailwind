'use client';
import { createContext,useReducer } from "react";

const initialState = {
     todos:[]
};

export const TodosContext = createContext(initialState);

const TodosReducer = (state, action) => {
    switch (action.type) {
      case "TODODONE":
        let arr = []
        for (let i=0;i<state.todos.length;i++){
          if(action.payload==state.todos[i]._id){
             arr.push({...state.todos[i] , ...state.todos[i].done= !state.todos[i].done});
          }else{
              arr.push(state.todos[i]);
          }
        }
        return {...state , ...state.todos=[...arr]};
      case "REFRECH" :
        return {...state , ...state.todos=[]}
      case "DELETETODO":
        const todos = state.todos.filter((e) => {
          return action.payload !== e._id
         }
         )
         console.log(todos)
        return {...state , todos}
      case "FETCHTODOS":
        return  {...state , ...state.todos=action.payload}
      case "ADDTODO":
        return {...state , ...state.todos=[...state.todos , action.payload]}
      default:
        return state;
    }
  };

export const TodosContextProvider = ({children}) => {
 
const [state , dispatcht] = useReducer(TodosReducer,initialState);

    const value = {
            todos : state.todos,
            dispatcht
    }  

    return  <TodosContext.Provider value={value}>
              {children}
            </TodosContext.Provider>
}