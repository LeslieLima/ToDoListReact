import React from 'react';
import CardNota from '../CardNota'
import "./estilo.css";


const ListaDeNotas = (props) => {
 
  return (
    <ul className="lista-notas">
      {props.notas.map((nota, index) => {
        return (
          <li className="lista-notas_item" key={index} >
            <CardNota 
              aoDuploClique={props.aoDuploClique}
              nota={nota.nota} 
              cor={nota.cor} 
              done={nota.done}
              id={index}
            />
          </li>
        );
      })}
    </ul>
  );

}

export default ListaDeNotas;
