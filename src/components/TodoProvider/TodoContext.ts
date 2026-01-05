import { createContext } from "react";
import { type item } from "../ToDoItem/index.tsx";


type TodoContextType = {
  todos: item[],
  addTodo: (formData: FormData) => void,
  toggleTodoCompleted: (todo: item) => void,
  deleteTodo: (todo: item) => void,
  showDialog: boolean,
  openFormTodoDialog: (todo: item | null) => void,
  closeFormTodoDialog: () => void,
  selectedTodo: item | null
  editTodo: (formData: FormData | null) => void
};

const TodoContext = createContext <TodoContextType | null>(null);

export default TodoContext;