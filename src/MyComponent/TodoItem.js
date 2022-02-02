
import React from 'react';

export const TodoItem = ({todo, onDelet}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelet(todo)}}>Delete</button>
    </div>
  );
};
