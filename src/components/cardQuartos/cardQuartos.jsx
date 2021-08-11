import React from 'react';
import'./cardQuartos.css';

export default function CardQuartos(props){
    return(
       <div className="card">
           <img className="card-quartos" src={props.cardfoto}/>
           <h2 className="card-roteiro">{props.cardTexto}</h2>
       </div>
    );
}