import React from 'react'
import { useState } from 'react'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { todoData } from '../services/todoData'

export const TodoList = () => {
    const [todos, setTodos] = useState(todoData)

    const styleDiv={display: "flex", flexDirection: 'column', alignItems: "center"}
const deleteTodo =(id) =>{
    setTodos((todos)=>{return todos.filter(todo => todo.id !==id)})
}

const  ajout =(tache)=>{
    setTodos([...todos, tache])
}
  return (
    <>
    <div style={styleDiv}>
    <h2>Todo-List</h2>
    {todos.map((todo, index) => {return <Todo key={index} todo={todo} deleteTodo={deleteTodo} />}) }  
    <AddTodo  ajout={ajout}/>
    </div>

    </>
  )
}
