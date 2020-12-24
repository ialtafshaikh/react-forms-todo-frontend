import React from "react";

export default function TodoList(props) {
  console.log(props);
  return (
    <div>
      {props.taskList.map((todo) => {
        return <p key={todo.taskID}>{todo.description}</p>;
      })}
    </div>
  );
}
