import { addToDoDto } from "../../../app/ToDos/DTOs/addToDoDto";
import { ToDoModel } from "../models/ToDo.model";

export class ToDoContextProps {
  ToDos: ToDoModel[];
  addTodo: (todo: addToDoDto) => void;
  removeToDo: (id: string) => void;
  ToggleToDo: (id: string) => void;
}