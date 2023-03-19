import React from "react";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	const createItem = (newTodo) => {
		setTodos(todos.concat(newTodo));
	};

	const removeItem = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const todosData = todos.map((todo) => {
		return (
			<Todo
				key={todo.id}
				id={todo.id}
				item={todo.task}
				removeTodo={removeItem}
			/>
		);
	});

	return (
		<div>
			<h1>To-do List</h1>
			<NewTodoForm createTodo={createItem} />
			<ul>{todosData}</ul>
		</div>
	);
}
