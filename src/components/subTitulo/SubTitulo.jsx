import React from 'react';
import './style.css'
export default function Subtitulo(props) {
    const paragrafo = props.paragrafo.split(".")
    paragrafo.pop()
    return(
        <>
           <h2 className="card_phase_h2">{props.h2}</h2>
            {paragrafo.map((textParagrafo,id)=><p key={id} className="paragrafo-style">{textParagrafo}</p>)} 
        </>
    );
}