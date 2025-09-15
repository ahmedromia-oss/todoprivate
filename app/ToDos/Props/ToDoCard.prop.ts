import { ToDoModel } from "../models/ToDo.model"

export class ToDoCardProps extends ToDoModel{
    onDelete:(id:string)=>void
    onToggle:(id:string)=>void
}