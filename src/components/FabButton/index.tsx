import { ButtonHTMLAttributes, ReactNode } from 'react'
import './fab-button.style.css'

type fabButtonProps = {
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function FabButton({ children, ...rest }: fabButtonProps) {
    return (
        <button className='fab' {...rest}>
            {children}
        </button>
    )
}