import { plainToInstance } from "class-transformer";
import { useState } from "react";
import { addToDoDto } from "../../../app/ToDos/DTOs/addToDoDto";
import { ToDos } from "../../../DataStore";
import { ToDoModel } from "../models/ToDo.model";

const useToDo = () => {
  const [todos, setTodos] = useState<ToDoModel[]>(ToDos);

  const addTodo = (addToDo: addToDoDto) => {
    const todo = plainToInstance(ToDoModel, addToDo);
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};
export default useToDo;
