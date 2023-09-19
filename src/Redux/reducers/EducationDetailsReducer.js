import { EDUCATION_DETAILS } from "../actionsTypes/EducationActTypes";

const initialState = {
	eduDetails: null,
};

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
