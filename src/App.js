import React, { useState } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';


const App= () => {

  const [notas, setNotas] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const CriarNota = (nota, cor) => {
    const done = false;
    const newTodo = { nota, cor, done };
    const newTodos = [...notas];
    newTodos.unshift(newTodo);
    setNotas(newTodos);
    
  }

  const aoDuploClique = (index, done) => {
        
    console.log(done);
    done = !done;
    console.log(done);
    console.log("entrou aqui")

/*    done ? revertTodo(index) : completeTodo(index) */
  }



const completeTodo = (i) => {
  const todo = notas[(i)];
  completedTodos.unshift(todo);
  setCompletedTodos(completedTodos);

  const newTodos = [...notas];
  newTodos.splice(i, 1);
  setNotas(newTodos);
}

const revertTodo = (i) => {
  const todo = completedTodos[i];
  notas.unshift(todo);
  setNotas(notas);

  const newCompletedTodos = [...completedTodos];
  newCompletedTodos.splice(i, 1);
  setCompletedTodos(newCompletedTodos);
}

return (
  <div className="App">
    <FormularioCadastro aoEnviar={CriarNota} />

    <p className="titulo">Notas Pendentes</p>
    <ListaDeNotas aoDuploClique={aoDuploClique} notas={notas} />
    <hr />

    <p className="titulo">Notas Concluídas</p>
    <ListaDeNotas aoDuploClique={aoDuploClique} notas={completedTodos} />
  </div>
);
}

export default App;
