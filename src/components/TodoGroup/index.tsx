import { use } from "react";
import { SubHeading } from "../SubHeading/index.tsx"
import { type item, ToDoItem } from "../ToDoItem/index.tsx"
import { ToDoList } from "../ToDoList/index.tsx"
import TodoContext from "../TodoProvider/TodoContext.ts"

export function TodoGroup({heading, items}: {heading: string, items: item[]}) {
    const todoContext = use(TodoContext);
    if(! todoContext){
        throw new Error("TodoContext must be used within a TodoProvider");
    }
    const { toggleTodoCompleted, deleteTodo } = todoContext;
    
    return(
        <>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {items.map(function (t) {
                    return <ToDoItem 
                    key={t.id} 
                    item={t} onToggleCompleted={toggleTodoCompleted} 
                    onDeleteTodo={deleteTodo}
                    />
                })}
            </ToDoList>
        </>
    )
}
