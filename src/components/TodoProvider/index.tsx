import { useEffect, useState, type ReactNode } from "react";
import TodoContext from "./TodoContext.ts";
import { type item } from "../ToDoItem/index.tsx";

const TODOS = 'todos';

export function TodoProvider({ children }: { children: ReactNode }) {

  const savedTodos = localStorage.getItem(TODOS);
  const [ todos, setTodos ] = useState(savedTodos? JSON.parse(savedTodos): []);
  const [ selectedTodo, setSelectedTodo ] = useState <item | null>(null);

  const [ showDialog, setShowDialog ] = useState(false);
  const openFormTodoDialog = function(todo: item | null) {
    if(todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  } 
  const closeFormTodoDialog = function() {
    setShowDialog(false);
    setSelectedTodo(null);
  } 


  const toggleTodoCompleted = function (todo: item) {
    setTodos((prevState: item[]) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      });
    });
  };

  const editTodo = function (formData: FormData | null) {
    setTodos((prevState: item[]) => {
      return prevState.map((t) => {
        if (selectedTodo && t.id === selectedTodo.id) {
          return {
            ...t,
            description: formData?.get('description'),
          };
        } else {
          return t;
        }
      });
    });
  };

  const addTodo = (formData: FormData) => {
    const description = formData.get("description");
    if (typeof description !== "string") {
      console.error("Descrição inválida!");
      return;
    }
    setTodos((prevState: item[]) => {
      const todo = {
        id: todos.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const deleteTodo = (todo: item) => {
    setTodos((prevState: item[]) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  useEffect(
    () => {localStorage.setItem(TODOS, JSON.stringify(todos))},[todos]
  );

  return <TodoContext
            value={{
                todos,
                addTodo,
                toggleTodoCompleted,
                deleteTodo,
                showDialog,
                openFormTodoDialog,
                closeFormTodoDialog,
                selectedTodo,
                editTodo
            }}>
        {children}
    </TodoContext>;
}
