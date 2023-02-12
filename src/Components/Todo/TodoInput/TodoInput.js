import React from 'react'
import { useState } from 'react';
import Button from '../../UI/Button/Button'
import styles from './TodoInput.module.css'
export default function TodoInput(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
 
   const goalInputChangeHandler = event => {
      if(event.target.value.trim().length > 0){
         setIsValid (true)
      }
      setEnteredValue(event.target.value)
   };
 
   const formSubmitHandler = event => {
     event.preventDefault();
     if (enteredValue.trim().length === 0){
        setIsValid(false);
        return;
     }

     props.onAddTodo(enteredValue);
    setEnteredValue('')
   };
 
   return (
     <form onSubmit={formSubmitHandler}>
       <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}
       >
         <label >Todo List</label>
         <input type="text"  placeholder='Title...' value ={enteredValue}
           onChange={goalInputChangeHandler} />
       </div>
       <Button type="submit">Add</Button>
     </form>
   );
 };

