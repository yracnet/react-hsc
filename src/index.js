import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './examples/counter/CounterApp';
import TodoApp from './examples/todo/TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

