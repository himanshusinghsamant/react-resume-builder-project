import { PERSONAL_INFO_VALUE } from "../actionsTypes/PersonalInfoActType";

export const personalInfoAction = (perData) => ({
	type: PERSONAL_INFO_VALUE,
	payload: perData,
});
