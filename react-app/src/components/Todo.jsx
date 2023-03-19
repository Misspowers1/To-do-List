import React from "react";

export default function Todo(props) {
  const remove = () => {
    return props.removeTodo(props.id);
  };

  return (
    <div>
      <li>{props.item}</li>
      <button>edit</button>
      <button onClick={remove}>x</button>
    </div>
  );
}
