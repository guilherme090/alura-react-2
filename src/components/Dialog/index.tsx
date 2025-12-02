import React, { ReactNode, useEffect, useRef } from "react";
import './dialog.style.css'
import { IconClose } from "../icons";
import { Button } from "../Button";

type dialogRefProps = {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}

export function Dialog ({ isOpen, onClose, children }: dialogRefProps) { 
    const dialogRef = useRef<HTMLDialogElement>(null); //elementos que não precisam ser renderizados imediatamente.

    useEffect( () => {
            if (isOpen) {
                openDialog();
            } else {
                closeDialog();
            }
        }, [isOpen]
    );  

    useEffect( () => {
            const dialog = dialogRef.current
            dialog?.addEventListener('close', onClose);
            return () => {
                dialog?.removeEventListener('close', onClose);
            }
        }, []
    );

    const openDialog = () => {
        dialogRef.current?.showModal();
    }

    const closeDialog = () => {
        dialogRef.current?.close();
    }

    return (
        <React.Fragment>
            <dialog ref={dialogRef} className="dialog">
                <div className="btn-close-wrapper">
                    <button 
                        onClick={onClose} autoFocus className="btn-close">
                        <IconClose/>
                    </button>
                </div>
                <div className="body">{ children }</div>
            </dialog>
        </React.Fragment>
    )
}