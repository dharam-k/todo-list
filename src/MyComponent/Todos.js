import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-3"></div>
         <div className="col-6">
           <h3 className='text-center my-3'>Todo List</h3>

            {props.todos.length === 0 ? "No Todo List Found" :
              props.todos.map((todo) => {
                return <TodoItem todo={todo} key={props.sno} onDelet={props.onDel} />
              })
            }
          </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};