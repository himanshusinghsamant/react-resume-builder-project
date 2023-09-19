import { WORK_EXPERIENCE } from "../actionsTypes/WorkExpActTypes";

export const workExpAction = (expData) => ({
	type: WORK_EXPERIENCE,
	payload: expData,
});
