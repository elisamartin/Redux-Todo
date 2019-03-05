export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';

const initialState = {
	todoList: [ { todo: 'Do Todo', complete: false } ]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todoList: [
					...state.todoList,
					{
						todo: action.payload,
						complete: false
					}
				]
			};

		case TOGGLE_ITEM:
			return {
				...state,
				todoList: state.todoList.map((todo, index) => {
					return index === action.payload ? { ...todo, complete: !todo.complete } : todo;
				})
			};

		case DELETE_ITEM:
			return {
				...state,
				todoList: state.todoList.filter((todo, index) => {
					return index !== action.payload;
				})
			};

		case CLEAR_COMPLETE:
			return {
				...state,
				todoList: state.todoList.filter((todo) => {
					return todo.complete === false;
				})
			};

		default:
			return state;
	}
};

export default reducer;
