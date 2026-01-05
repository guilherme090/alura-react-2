import { type ReactNode } from 'react'
import './todo-list.style.css'

export function ToDoList ({ children }: {children: ReactNode}) {
    return (
        <ul className='todo-list'>
            {children}
        </ul>
    )
}