import React from "react"
import "./estilo.css"



const CardNota = (props) => {

    const aoDuploClique = (evento) => {
        evento.preventDefault();
        props.aoDuploClique(props.index, props.done);
    }

    return (
        <section
            onDoubleClick={aoDuploClique}
            className="card-nota"
            style={{ backgroundColor: props.cor }}>
            <h3>{props.nota}</h3>
        </section >
    );
}

export default CardNota;