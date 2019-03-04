export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

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
						todo: action.payload
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

		default:
			return state;
	}
};

export default reducer;
