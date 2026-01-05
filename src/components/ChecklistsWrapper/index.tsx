import { type ReactNode } from 'react'
import './checklists-wrapper.style.css'

export function ChecklistsWrapper({ children }: { children: ReactNode }) {
    return <section className='wrapper'>
        {children}
    </section>
}