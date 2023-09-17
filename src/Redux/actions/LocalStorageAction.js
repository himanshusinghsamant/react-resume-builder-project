import { SET_LOCAL_STORAGE_DATA } from "../actionsTypes/LocalStorageActionType";

// src/store/actions/localStorageActions.js

export const setLocalStorageData = ( data) => {
    return {
      type: SET_LOCAL_STORAGE_DATA,
      payload: data,
    };
  };
  
 
  
