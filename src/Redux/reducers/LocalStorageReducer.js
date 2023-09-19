import { SET_LOCAL_STORAGE_DATA } from "../actionsTypes/LocalStorageActionType";

const initialState = {
	data: [],
};

const localStorageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOCAL_STORAGE_DATA:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default localStorageReducer;
