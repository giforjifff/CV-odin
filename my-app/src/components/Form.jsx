import React from 'react';
import PersonalComponent from './PersonalForm.jsx'
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';

const Form = ({ personal, handlePersonalChange, education, onAddEducation, experience, onAddExperience }) => {
    const labelObject = (field) => {
        const obj = {}
        field.forEach((e)=> {
        obj[e.name] = ''                             
        })
        return obj
    }
    const educationFields = [
        { label: 'School', name: 'school', placeholder: 'School Name', required: true },
        { label: 'Degree', name: 'degree', placeholder: 'Degree Name', required: true },
        { label: 'Start Date', name: 'startDate', type: 'date', required: true },
        { label: 'End Date', name: 'endDate', type: 'date' },
        { label: 'Location', name: 'location' },
      ];
      const educationFormFields = {}
      
      const experienceFields = [
        { label: 'Company', name: 'company', placeholder: 'Company Name', required: true },
        { label: 'Position Title', name: 'positionTitle', placeholder: 'Job Title', required: true },
        { label: 'Start Date', name: 'startDate', type: 'date', required: true },
        { label: 'End Date', name: 'endDate', type: 'date' },
        { label: 'Location', name: 'location' },
        { label: 'Description', name: 'description', type: 'textarea' },
      ];

   
    return(
        <>
        <PersonalComponent
        personal={personal}
        handlePersonalChange={handlePersonalChange}
        />
        <EducationForm
        education={education}
        onAddEducation={onAddEducation}
        formfields = {labelObject(educationFields)}
        fieldDetail = {educationFields}
        name={'Education'}
        />
        <EducationForm
        education={experience}
        onAddEducation={onAddExperience}
        formfields = {labelObject(experienceFields)}
        fieldDetail = {experienceFields}
        name={'Experience'}
        />
        {/* <ExperienceForm
        experience={experience}
        onAddExperience={onAddExperience}
        /> */}
        </>
    )
}
export default Form;
