import React from 'react'
import { ButtonDelete } from './ButtonDelete'

export const Todo = (props) => {

    const deleteTodo =()=>{
props.deleteTodo(props.todo.id)

    }


  return (
    <>
    <p>
        {props.todo.label} <span>
    
    {props.todo.dateEcheance}</span>
    <ButtonDelete handleClick={deleteTodo} >X</ButtonDelete>
    </p>
    </>
  )
}
