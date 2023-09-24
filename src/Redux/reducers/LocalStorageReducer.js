import { SET_LOCAL_STORAGE_DATA } from "../actionsTypes/LocalStorageActionType";


//  Here we are creating initial State object to receive values from LocalStorage*****************

const initialState = {
	data: [],
};
// This localStorageReducer  function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

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
