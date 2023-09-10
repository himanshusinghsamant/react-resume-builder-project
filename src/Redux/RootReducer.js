import {combineReducers} from 'redux'
import { personalInfoReducer } from "./reducers/PersonalInfoReducer";
import { WorkExpReducer } from './reducers/WorkExpReducer';
import {educationDetReducer} from './reducers/EducationDetailsReducer'
import { keySkillsReducer } from './reducers/KeySkillsReducer';
import { setTemplateReducer } from './reducers/SetTemplateReducer';
import { saveResumeTempReducer } from './reducers/SetTemplateReducer';
import { removeResumeReducer } from './reducers/SetTemplateReducer';


const rootReducer = combineReducers({
    personalInfo: personalInfoReducer,
    workExp: WorkExpReducer,
    eduDetail: educationDetReducer,
    skills: keySkillsReducer,
    template: setTemplateReducer,
    saveResume: saveResumeTempReducer,
    removeResume: removeResumeReducer
})

export default rootReducer;