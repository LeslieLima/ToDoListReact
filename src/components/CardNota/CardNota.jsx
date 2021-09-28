import React from "react"
import "./estilo.css"



const CardNota = (props) => {

    const aoDuploClique = (evento) => {
        evento.preventDefault();
        props.aoDuploClique(props);
    }

    return (
        <section
            onDoubleClick={aoDuploClique}
            className="card-nota"
            style={{ backgroundColor: props.cor }}>
            <h3>{props.nota}</h3>
            {props.done}
            {props.id}
        </section >
    );
}

export default CardNota;