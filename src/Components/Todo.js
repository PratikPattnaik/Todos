import React from 'react'

export const Todo = ({task,onDelete,onDone}) => {
  return (
    <div className='card text-center' style={task.style}>
        {/* <h6>{task.sno}</h6> */}
        <h4 className='card-header'>{task.heading}</h4>
        <p className='card-body align'>{task.desc}</p>
        <div className="but">           
            <button className="btn btn-success" onClick={()=>{onDone(task)}}>Done</button>
            <button className="btn btn-danger" onClick={()=>{onDelete(task)}}>Delete</button>
        </div>
    </div>
  )
}

