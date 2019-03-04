import React from 'react';
import { connect } from 'react-redux';
import { addToList, toggleComplete } from '../actions';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	return (
		<div className="todo-list-container">
			{props.todoList.map((todo, index) => {
				return <TodoItem key={index} todo={todo} id={index} toggle={props.toggleComplete} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todoList: state.todoList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToList: (text) => dispatch(addToList(text)),
		toggleComplete: (index) => dispatch(toggleComplete(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
