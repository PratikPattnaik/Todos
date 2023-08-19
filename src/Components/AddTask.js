import React, { useState } from "react";


export default function AddTask ({addTodo}) {
    const [heading, setHeading] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault()
        // console.log("Form Submitted")
        if(!heading || !desc){
            alert("Title or Description cannot be empty!")
        }
        else{
          addTodo(heading,desc);
          setHeading("");
          setDesc("");
        }
        
    }
  return (
    <div className="container my-3 addTodo">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="heading" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={heading}
            onChange={(e)=>{setHeading(e.target.value)}}
            className="form-control"
            id="heading"
            />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success addBut">
          Add To-Do
        </button>
      </form>
    </div>
  );
}
