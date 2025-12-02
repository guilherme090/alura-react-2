import { use } from "react";
import { SubHeading } from "../SubHeading"
import { item, ToDoItem } from "../ToDoItem"
import { ToDoList } from "../ToDoList"
import TodoContext from "../TodoProvider/TodoContext"

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
