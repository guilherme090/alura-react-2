import './todo-item.style.css'
import { IconPencil, IconTrash } from "../icons";
import { use } from 'react';
import TodoContext from '../TodoProvider/TodoContext';

export type itemType = {
    key: number,
    item: item,
    onToggleCompleted: (todo: item) => void,
    onDeleteTodo: (todo: item) => void 
}

export type item = {
  id: number,
  description: string,
  completed: boolean,
  createdAt: string,
}

export function ToDoItem ({ item }: itemType) {

    const styles = ['todo-item']

    const todoContext = use(TodoContext);
    if(!todoContext){
        throw new Error("todoContext deve ser usado em um contexto.");
    }

    const { toggleTodoCompleted, deleteTodo, openFormTodoDialog } = todoContext;

    if (item.completed) {
        styles.push('completed');
    }

    return (
        <li className={styles.join(' ')}>
            <p className="date">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    defaultChecked={item.completed}
                    onClick={() => toggleTodoCompleted(item)} 
                />
                <p className="description">
                    {item.description}
                </p>
                <div className="actions">
                    <button className="btn" onClick={() => deleteTodo(item)}>
                        <IconTrash />
                    </button>
                    <button className="btn" onClick={() => openFormTodoDialog(item)}>
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}