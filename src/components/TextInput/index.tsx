import { InputHTMLAttributes } from 'react';
import './text-input.style.css'

export function TextInput (props: InputHTMLAttributes<HTMLInputElement>) {
    return(
        <input {...props} className="text-input"/>
    );
}