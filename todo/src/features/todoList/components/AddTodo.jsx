import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[todos, setTodos]=useState({
        label: "",
        dateEcheance: ""
        
      })

      const handleChangeTache = (event) => {
       
        setTodos(
            {
            ...todos,
           label :event.target.value,
           
        })
      };
   
      const handleChangeDate = (event) => {
setTodos({...todos, dateEcheance: event.target.value})
      }
   
     
      const handleSubmit = (event)=>{
        event.preventDefault();
props.ajout(todos)
      }
  return (
    <>
    <h2> Add-Todo</h2>

    <div >
label: <input type="text" defaultValue={todos.label} onChange={(event)=> handleChangeTache(event)} />
dateEcheance: <input type="date" defaultValue={todos.dateEcheance}  onChange={(event)=> handleChangeDate(event)} />
<button type="submit" onClick={(event)=> handleSubmit(event)} >Ajouter</button>
</div>
    </>
  )
}
