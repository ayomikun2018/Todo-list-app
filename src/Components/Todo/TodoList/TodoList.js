import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

export default function TodoList(props) {
    return (
        
            <ul className="todo-list">
              {props.items.map(todo => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  onDelete={props.onDeleteItem}
                >
                  {todo.text}
                </TodoItem>
              ))}
            </ul>
        
    )
}
