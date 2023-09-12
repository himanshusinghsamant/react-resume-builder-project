import { SET_TEMPLATE } from "../actionsTypes/SetTemplate";
import { SAVE_RESUME_TEMPLATE } from "../actionsTypes/SetTemplate";
import { REMOVE_RESUME_TEMPLATES } from "../actionsTypes/SetTemplate";

const initialState = {
    selectedTemplate : null,
    saveResumeTemp : []
}

export const setTemplateReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SET_TEMPLATE:
            return{
                ...state,
                selectedTemplate: action.payload,
            }
    
        default:
            return state;
    }
}

export const saveResumeTempReducer =(state =initialState, action)=>{
    switch (action.type) {
        case SAVE_RESUME_TEMPLATE:
            return{
                ...state,
                saveResumeTemp:[...state.saveResumeTemp, action.payload],
            }
    
        default:
            return state;
    }
}

export const removeResumeReducer =(state=initialState, action)=>{
    switch (action.type) {
        case REMOVE_RESUME_TEMPLATES:
            return{
                ...state,
                saveResumeTemp:state.saveResumeTemp.filter((_, index)=>index !== action.payload)
            }
    
        default:
            return state;
    }
}