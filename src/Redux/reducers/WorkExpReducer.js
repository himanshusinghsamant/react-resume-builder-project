import { WORK_EXPERIENCE } from "../actionsTypes/WorkExpActTypes";

const initialState = {
    workData:[]
}

export const WorkExpReducer = (state=initialState, action)=>{
    switch (action.type) {
        case WORK_EXPERIENCE:
            return {
                ...state,
                workData :[...state.workData, action.payload]
            }
    
        default:
            return state;
    }
}
