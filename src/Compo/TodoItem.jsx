import React from "react";

import { MdDelete } from "react-icons/md";

import css from "./TodoItem.module.css"


function TodoItem({todoName , todoDate , onDeleteClick}) {

  return (
    <div className="container">
      <div className="row ad-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
          onClick={() => onDeleteClick(todoName)}
          type="button" className={`btn btn-danger ${css.dltbtn}`}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
