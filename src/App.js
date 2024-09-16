import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([])
  let saveToDoList=(event)=>{
    event.preventDefault();

    let toname=event.target.todoname.value.trim();
    if(toname===''){
      alert (`Enter some value`)
    }
    else
       if(!todolist.includes(toname)){
      let finalTodo=[...todolist,toname]
      setTodolist(finalTodo)
    }else{
      alert (`${toname} already exist!!! \nCan't add again!`)
    }
    event.target.todoname.value=''
  }

  let list=todolist.map((v,i)=>{
    return(
      <TodolistItems key={i} value={v} index={i} todolist={todolist} setTodolist={setTodolist}></TodolistItems>
    )
  })

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='todoname' placeholder='Enter some task'></input><button>Save</button>
      </form>
      <div class='outerDiv'>
       <ul>
        {list}
       </ul>
      </div>
    </div>
  );
}

export default App;


function TodolistItems({value,index,todolist,setTodolist}){
  let [status,setStatus]=useState(false)
  const handleDelete = () => {
    const userResponse = window.confirm("Are you sure to delete?");
    if (userResponse) {
      // setConfirm(true);
      deleteItem(); 
    } else {
      // setConfirm(false);
    }
  };


let checkStatus=()=>{
  setStatus(!status)
}

  let deleteItem=()=>{
    let finalData=todolist.filter((v,i)=>i!=index)
    setTodolist(finalData)
  }
  return(   
       <li className={(status)?"deleteItem":""}>{index+1}.    {value}<span onClick={handleDelete}>🗑️</span><span onClick={checkStatus}>{status? "✔️" : "✖️"}</span></li>
  )
}