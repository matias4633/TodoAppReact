import React from 'react';
import ReactDOM from 'react-dom'; //Para renderizar el portal es este import, cambia para el root.
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal-back">{children}</div>,
        document.getElementById('modal')
    );
}
export {Modal};