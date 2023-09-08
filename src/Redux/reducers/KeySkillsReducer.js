import { KEY_SKILLS_DETAILS } from "../actionsTypes/KeySkillsActTypes";

const initialState = {
    skillDetails :[]
}

export const keySkillsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case KEY_SKILLS_DETAILS:
            return {
                ...state,
                skillDetails:[...state.skillDetails, action.payload]
            }
    
        default:
            return state;
    }
}