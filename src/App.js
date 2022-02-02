import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import {Todos} from "./MyComponent/Todos";
import {Footer} from "./MyComponent/Footer";
import {AddTodo} from "./MyComponent/AddTodo";
import React, { useState } from 'react';

function App() {

  const onDelete = (todo)=>{
    console.log("this is delete function",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "Check laptop",
      desc : "Plz check laptop for ready"
    },
    {
      sno : 2,
      title : "Check Desktop",
      desc : "Plz check Desktop for ready"
    },
    {
      sno : 3,
      title : "Check mobile",
      desc : "Plz check mobile for ready"
    }
  ]);

  const addTodo = (title, desc)=>{
    console.log("adding list", title, desc);

    let sno = todos[todos.length-1].sno+1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);

    console.log(myTodo);

  }

  return (
    <>
   <Header title="MyTodoList" searchBar={true} />
   <AddTodo addTodo={addTodo} />
   <Todos todos={todos} onDel={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
