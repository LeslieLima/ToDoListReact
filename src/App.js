import React, { useState } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';


const App = () => {

  const [notas, setNotas] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const CriarNota = (nota, cor, done) => {
    const newTodo = { nota, cor, done };
    const newTodos = [...notas];
    newTodos.unshift(newTodo);
    setNotas(newTodos);
  }

  const aoDuploClique = (props) => {
    props.done ? revertTodo(props.id) : completeTodo(props.id);
  }

  const completeTodo = (i) => {
    const todo = notas[(i)];
    (notas[(i)].done) = !(notas[(i)].done);
    completedTodos.unshift(todo);
    setCompletedTodos(completedTodos);

    const newTodos = [...notas];
    newTodos.splice(i, 1);
    setNotas(newTodos);
  }


  const revertTodo = (i) => {
    const todo = completedTodos[(i)];
    (completedTodos[(i)].done) = !(completedTodos[(i)].done);
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
