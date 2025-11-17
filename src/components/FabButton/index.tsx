import { ReactNode } from 'react'
import './fab-button.style.css'

export function FabButton({ children }: { children: ReactNode }) {
    return (
        <button className='fab'>
            {children}
        </button>
    )
}