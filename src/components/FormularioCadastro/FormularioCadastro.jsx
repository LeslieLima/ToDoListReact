import React, { useState } from 'react';
import './estilo.css'


const FormularioCadastro = (props) => {

    const [nota, setNota] = useState("");
    const [cor, setCor] = useState("");
    const done = false;

    const handleChangeNota = (evento) => {
        setNota(evento.target.value); 
    }

    const handleChangeCor = (evento) => {
        setCor(evento.target.value);
    }

    const aoEnviar = (evento) => {
        evento.preventDefault();
        props.aoEnviar(nota, cor, done);
        setNota("");
    }

    const limparNotas = () => {
       
    }


    return (

        <form
            className="form-cadastro"
            onSubmit={aoEnviar}>

            <div className="container-input">
                <input
                    value={nota}
                    className="input-nota"
                    type="text"
                    placeholder="Escreva sua nota..."
                    onChange={handleChangeNota}
                />

                <input
                    value={cor}
                    className="input-color"
                    type="color"
                    onChange={handleChangeCor}
                />

                <button
                    type="submit"
                    className="form-cadastro-submit">
                    Criar Nota
                </button>
            </div>

            <button
                className="form-cadastro-submit"
                onClick={limparNotas}>
                Limpar Notas
            </button>

        </form>
    );
}

export default FormularioCadastro;
