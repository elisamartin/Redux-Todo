import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList, clearComplete } from '../actions';

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			inputText: ''
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleClick = (event) => {
		event.preventDefault();
		this.props.addToList(this.state.inputText);
		this.setState({
			inputText: ''
		});
	};

	handleClear = (event) => {
		event.preventDefault();
		this.props.clearComplete();
	};

	render() {
		return (
			<form>
				<input
					type="text"
					name="inputText"
					value={this.state.inputText}
					placeholder="Add task"
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>Add</button>
				<button onClick={this.handleClear}>Clear completed</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todoList: state.todoList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToList: (text) => dispatch(addToList(text)),
		clearComplete: () => dispatch(clearComplete())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
