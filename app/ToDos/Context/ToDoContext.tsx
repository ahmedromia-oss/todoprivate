import { createContext, ReactNode } from "react";
import { ToDos } from "../../../DataStore";
import { addToDoDto } from "../../../app/ToDos/DTOs/addToDoDto";
import useToDo from "../Hooks/useToDo";
import { ToDoContextProps } from "../Props/ToDocontext.prop";

export const ToDoContext = createContext<ToDoContextProps>({
  ToDos: ToDos,
  addTodo: (addTodo: addToDoDto) => {},
  removeToDo: (id: string) => {},
  ToggleToDo: (id: string) => {},
});
// Fixed: children should be inside props object
export const ToDoContextProvider = ({ children }: { children: ReactNode }) => {
  const { todos, toggleTodo, addTodo, deleteTodo } = useToDo();

  return (
    <ToDoContext.Provider
      value={{
        ToDos: todos,
        addTodo: addTodo,
        removeToDo: deleteTodo,
        ToggleToDo: toggleTodo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
