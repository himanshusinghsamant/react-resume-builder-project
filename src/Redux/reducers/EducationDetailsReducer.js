import { EDUCATION_DETAILS } from "../actionsTypes/EducationActTypes";


//  Here we are creating initial State object to receive values from educationDetails*****************

const initialState = {
	eduDetails: null,
};
// This educationDetReducer  function has two parameters one  is State which is storing  values getting from action and another  is Action which is getting data *********************

export const educationDetReducer = (state = initialState, action) => {
	switch (action.type) {
		case EDUCATION_DETAILS:
			return {
				...state,
				eduDetails: action.payload,
			};

		default:
			return state;
	}
};
