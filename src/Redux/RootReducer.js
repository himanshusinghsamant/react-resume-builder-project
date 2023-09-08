import {combineReducers} from 'redux'
import { personalInfoReducer } from "./reducers/PersonalInfoReducer";
import { WorkExpReducer } from './reducers/WorkExpReducer';
import {educationDetReducer} from './reducers/EducationDetailsReducer'
import { keySkillsReducer } from './reducers/KeySkillsReducer';


const rootReducer = combineReducers({
    personalInfo: personalInfoReducer,
    workExp: WorkExpReducer,
    eduDetail: educationDetReducer,
    skills: keySkillsReducer,
})

export default rootReducer;