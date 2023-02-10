import React from 'react'
import './TodoItem.css'
export default function TodoItem(props) {
    const deleteHandler = () => { 
        props.onDelete(props.id);
      };
    return (
        <div>
            <li className="todo-item" onClick={deleteHandler}>
            {props.children}
        </li>
        </div>
    )
}
