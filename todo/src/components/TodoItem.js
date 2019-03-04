import React from 'react';

const TodoItem = (props) => {
	return (
		<div className={props.todo.complete ? 'todo-item done' : 'todo-item'} onClick={() => props.toggle(props.id)}>
			{props.todo.todo}
		</div>
	);
};

export default TodoItem;
