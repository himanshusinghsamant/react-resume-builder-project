import { SET_TEMPLATE } from "../actionsTypes/SetTemplate";
import { SAVE_RESUME_TEMPLATE } from "../actionsTypes/SetTemplate";
import { REMOVE_RESUME_TEMPLATES } from "../actionsTypes/SetTemplate";

export const setTemplateAction = (tempInfo)=>({
    type : SET_TEMPLATE,
    payload : tempInfo,
})

export const saveResumeTempAction = (temp)=>({
    type : SAVE_RESUME_TEMPLATE,
    payload: temp,
})

export const removeResumeAction = (index)=>({
    type: REMOVE_RESUME_TEMPLATES,
    payload: index,
})
