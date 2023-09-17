import {PROFILE_INFO_VALUE} from "../actionsTypes/ProfileActType";

export const profileAction=(proData)=>({
    type : PROFILE_INFO_VALUE,
    payload : proData,
})