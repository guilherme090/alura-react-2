import { type ReactNode } from 'react'
import './container.style.css'

export function Container ({ children }: { children: ReactNode }) {
    return (<section className='container'>
        {children}
    </section>)
}