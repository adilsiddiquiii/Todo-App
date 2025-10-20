import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import css from './AddTodo.module.css'


function AddTodo({onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e)=> {

    // console.log(e.target.value);
    setTodoName(e.target.value)
  }

  const handleDateChange = (e)=>{
    // console.log(e.target.value);
    setTodoDate(e.target.value)
  }

  const handleAddButtonClick = ()=>{
    onNewItem(todoName , todoDate)
    setTodoDate("") ; 
    setTodoName("")

  }

  return (
    <div className="container text-center">
      <div className="row ad-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here"
          value={todoName}
          onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" 
          value={todoDate}
          onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
          onClick={handleAddButtonClick}
          type="button" className={`btn btn-success ${css.adbtn}`}>
            <IoAddCircleSharp />

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
