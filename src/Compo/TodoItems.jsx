import React from "react";
import TodoItem from "./TodoItem";


function TodoItems({ TodoItems , onDeleteClick }) {

  



  return (
    <div className="item-container">
      {TodoItems.map(item => <TodoItem 
      key={item.name}
      todoDate={item.dueDate} todoName={item.name}
      onDeleteClick= {onDeleteClick}
      /> )}
      
    </div>
  );
}

export default TodoItems;
