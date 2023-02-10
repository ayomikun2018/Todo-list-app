import React, { useState } from 'react';
import TodoList from './Components/Todo/TodoList/TodoList';
import TodoInput from './Components/Todo/TodoInput/TodoInput';
import './App.css';

const App = () => {
  const [todoGoals, setTodoGoals] = useState([
    { text: 'Buy clothes!', id: 'g1' },
    { text: 'Buy Shoes!', id: 'g2' }
  ]);

  const addTodoHandler = enteredText => {
    setTodoGoals(prevTodo => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({ text: enteredText, id: Math.random().toString() });
      // console.log(updatedGoals)
      return updatedTodo;
      
    });
  };

  const deleteItemHandler = todoId => {
    setTodoGoals(prevTodo => {
      const updatedTodo = prevTodo.filter(todo => todo.id !== todoId);
      return updatedTodo;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No todo found. Maybe add one?</p>
  );

  if (todoGoals.length > 0) {
    content = (
      <TodoList items={todoGoals} onDeleteItem={deleteItemHandler} />
    );
    // setTodoGoals('')
  }

  return (
    <div>
      <section id="goal-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="goals">
        {content}
     
      </section>
    </div>
  );
};

export default App;

