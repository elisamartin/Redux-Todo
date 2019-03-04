import React from 'react';

const TodoItem = (props) => {
	return (
		<div className={props.todo.complete ? 'todo-item done' : 'todo-item'} onClick={() => props.toggle(props.id)}>
			{props.todo.todo}
			<button onClick={() => props.delete(props.id)}>X</button>
		</div>
	);
};

export default TodoItem;
