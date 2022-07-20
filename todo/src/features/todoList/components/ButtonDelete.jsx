import React from 'react'

export const ButtonDelete = (props) => {

const handleClick =(event)=>{
props.handleClick(event)

}
const styleBouton={borderRadius: "50%", color:"white", backgroundColor:"red", border:"none"}
  return (
    <>
    
    <button style={styleBouton} onClick={handleClick}>
        {props.children}
    </button>
    </>
  )
}
