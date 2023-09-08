import { PERSONAL_INFO_VALUE } from "../actionsTypes/PersonalInfoActType"

const initialState = {
    personalInfoValues:{}
}

export const personalInfoReducer =(state=initialState, action)=>{
    switch(action.type){
        case PERSONAL_INFO_VALUE:
        return {
            ...state,
            personalInfoValues: action.payload,
        };
        default:
            return state;
    }
}

