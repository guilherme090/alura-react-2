import { ReactNode } from 'react'
import './heading.style.css'

export function Heading ({ children }: { children: ReactNode }) {
    return (
        <h1 className='heading'>
            { children }
        </h1>
    )
}