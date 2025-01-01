import React from 'react';
import PersonalComponent from './PersonalForm.jsx'
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';

const Form = ({ personal, handlePersonalChange, education, onAddEducation, experience, onAddExperience }) => {
    const educationFormFields = {school:'', degree:'', startDate:'', endDate:'', location:''}
    const experienceFormFields = {
        company: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      }
   
    return(
        <>
        <PersonalComponent
        personal={personal}
        handlePersonalChange={handlePersonalChange}
        />
        <EducationForm
        education={education}
        onAddEducation={onAddEducation}
        formfields = {educationFormFields}
        />
        <EducationForm
        education={experience}
        onAddEducation={onAddExperience}
        formfields = {experienceFormFields}
        />
        {/* <ExperienceForm
        experience={experience}
        onAddExperience={onAddExperience}
        /> */}
        </>
    )
}
export default Form;
