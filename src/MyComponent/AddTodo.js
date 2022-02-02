import React, { useState } from 'react';

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e)=>{
        e.preventDefault();

        if(!title || !desc){
            alert("Title or Desc can not be Blank!")
        }

        props.addTodo(title, desc)

    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="Form-label">Add Todo List:</label>
                            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="Form-label">Add Description:</label>
                            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                        </div>
                        <button type="submit"  className="btn btn-sm btn-primary">Add Todo</button>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
};
