import { KEY_SKILLS_DETAILS } from "../actionsTypes/KeySkillsActTypes";

export const keySkillsAction = (skillsData)=>({
    type : KEY_SKILLS_DETAILS,
    payload: skillsData
});