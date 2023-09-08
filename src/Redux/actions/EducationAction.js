import { EDUCATION_DETAILS } from "../actionsTypes/EducationActTypes";

export const educationDetailsAction =(eduData)=>({
    type: EDUCATION_DETAILS,
    payload: eduData,
});