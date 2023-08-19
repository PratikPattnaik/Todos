import React from 'react'
import {Todo} from './Todo'

export default function Todos(props) {
  return (
    <div className="container container2 text-center">
        {/* <Todo task={props.todos[2]}/> */}

        
        {
          props.todos.length === 0 
          ? <h4 className='h4'><i>No To-Dos to display</i></h4> 
          : props.todos.map((todo,key)=>{
            return(
            <Todo key={key} task={todo} onDelete={props.onDelete} onDone = {props.onDone}/>
            )})
        }
        
    </div>
  )
}
