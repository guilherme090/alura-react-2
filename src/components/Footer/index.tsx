import { ReactNode } from 'react'
import './footer.style.css'

export function Footer ({ children }: { children: ReactNode }) {
    return (
        <footer className="footer">
            {children}
        </footer>
    )
}