
import { EDUCATION_DETAILS } from "../actionsTypes/EducationActTypes";

// Here we are creating ( educationDetailsAction ) Action which is Define a type and receiving EduData as payload **********

export const educationDetailsAction = (eduData) => ({
	type: EDUCATION_DETAILS,
	payload: eduData,
});
