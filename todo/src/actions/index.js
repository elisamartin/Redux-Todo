import { ADD_TODO, TOGGLE_ITEM, DELETE_ITEM } from '../reducers';

export const addToList = (text) => {
	return {
		type: ADD_TODO,
		payload: text
	};
};

export const toggleComplete = (index) => {
	return {
		type: TOGGLE_ITEM,
		payload: index
	};
};

export const deleteItem = (index) => {
	return {
		type: DELETE_ITEM,
		payload: index
	};
};
