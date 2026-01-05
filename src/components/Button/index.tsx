import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import './button.style.css'

type buttonProps = {
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: buttonProps) {
    return <button {...rest}>{children}</button>
}