import { PROFILE_INFO_VALUE } from "../actionsTypes/ProfileActType";

// Here we are creating  ( profileAction ) Action which Defines a type and receiving proData as payload **********

export const profileAction = (proData) => ({
	type: PROFILE_INFO_VALUE,
	payload: proData,
});
