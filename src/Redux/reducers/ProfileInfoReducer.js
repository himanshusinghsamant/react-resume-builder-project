import { PROFILE_INFO_VALUE } from "../actionsTypes/ProfileActType";

const initialState = {
	profileInfovalue: {},
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_INFO_VALUE:
			return {
				...state,
				profileInfovalue: action.payload,
			};

		default:
			return state;
	}
};
