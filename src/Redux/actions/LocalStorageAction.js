import { SET_LOCAL_STORAGE_DATA } from "../actionsTypes/LocalStorageActionType";

// Here we are creating  ( setLocalStorageData ) Action which Defines a type and receiving LocalStorageData as payload **********


export const setLocalStorageData = (data) => {
	return {
		type: SET_LOCAL_STORAGE_DATA,
		payload: data,
	};
};
