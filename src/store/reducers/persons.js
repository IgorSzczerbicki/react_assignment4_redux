import * as actions from '../actions'

const initialState = {
	persons: []
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case actions.ADD_PERSON:
			return {
				...state,
				persons: state.persons.concat(
					{
						id: Math.random(),
						name: action.name,
						age: action.age
					}
				)
			};
		case actions.DELETE_PERSON:
			return {
				...state,
				persons: state.persons.filter(per => per.id !== action.id)
			}
	}
	return state;
};

export default reducer;