import { SET_TEMPLATE } from "../actionsTypes/SetTemplate";
import { REMOVE_RESUME_TEMPLATES } from "../actionsTypes/SetTemplate";

export const setTemplateAction = (tempInfo)=>({
    type : SET_TEMPLATE,
    payload : tempInfo,
})


export const removeResumeAction = (index)=>({
    type: REMOVE_RESUME_TEMPLATES,
    payload: index,
})
