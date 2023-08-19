import "./App.css";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import AddTask from "./Components/AddTask";
import Heading from "./Components/Heading";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (task) =>{
    console.log("Hi,I am onDelete Function for ",task);
    setTodos(todos.filter((e)=>{
      return e!==task;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const onDone = (task) =>{
    console.log("Hi,I am onDone Function for ",task);
    const arr = [...todos];
    task.style={
      backgroundColor:"#a0ff33"
    }
    
    setTodos(arr);
    localStorage.setItem("todos",JSON.stringify(todos));
    setTimeout(()=>{onDelete(task)},2000)
    // console.log('new todo',newTodo);
  }
  
  const addTodo = (heading,desc) =>{
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      heading: heading,
      desc: desc
    } 
    setTodos([...todos,newTodo]);
    console.log('new todo',newTodo);
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Navbar title="To-Do's App" about={true} />
      <Heading heading="Add Todo"/>
      <AddTask addTodo={addTodo}/>
      <Heading heading="To-Do List"/>
      <Todos todos={todos} onDelete={onDelete} onDone={onDone}/>
      <Footer />
    </>
  );
}

export default App;
