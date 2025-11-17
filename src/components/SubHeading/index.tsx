import { ReactNode } from 'react'
import './sub-heading.style.css'

export function SubHeading ({ children }: { children: ReactNode }) {
    return (
        <h2 className='subheading'>
            { children }
        </h2>
    )
}