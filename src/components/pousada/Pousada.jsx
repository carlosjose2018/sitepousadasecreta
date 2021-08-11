import React from 'react';
import './index.css';
export default function Pousada (props){
    return(
        <>
        <div className="container_pousadaQuartos">
          <div className="container_pousadaQuartosPhase">
             <h3>{props.h3}</h3>
              <p>{props.paragrafoPousada}</p>
          </div>
           <img src={props.cardImagem} className="cardImagem"/>
        </div>
        </>
    );
}