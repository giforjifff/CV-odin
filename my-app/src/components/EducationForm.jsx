import React, { useState } from 'react';
import DetailsForm from './DetailsForm';

const EducationForm = ({ education, onAddEducation, formfields, fieldDetail, name }) => {
    
    const [editMode, setEditMode] = useState({ index: null }); // Single 'index' key
    const [editform, setEditform] = useState(formfields)
    const [error, setError] = useState({})
    const[toggleEducation, setToggleEducation] = useState(false)

    const handleEducationClick = (index) => {
        setEditMode({ index: editMode.index === index ? null : index }); // Toggle
        setEditform(education[index])
        
    };

    const handleChange = (index, e) => {
          console.log(index);
          
          const newEducation = {...editform, [e.target.name]: e.target.value};
          console.log(newEducation);
          
          setEditform(newEducation)
      };
    
    const handleSave = (ind) => {
      // console.log(editform.degree);
      console.log(fieldDetail.filter((f)=>f.required).map((e)=>e.name));
      const requiredFields = fieldDetail.filter((f)=>f.required).map((e)=>e.name)
      console.log('editform',editform[requiredFields[1]]);
      const checkRequired = (requiredFields) => {
        let val = true
        requiredFields.forEach(element => {
          editform[element] === ''? val = false: null
        });
        return val
      }
      console.log(checkRequired(requiredFields));
      

      
      if(!checkRequired(requiredFields)){
        console.log(editform[Object.keys(formfields)[0]]);
        
        setError({error: 'required Feilds not filled'})
      }
      else{
        onAddEducation(editform, ind)
        setError({})
        setEditMode({index:null})
        setEditform(formfields)
      }   
    }

    const onAddButton = () => {
      console.log('formfield', formfields);
      setEditform(formfields)
      setEditMode({index: education.length})
    }
    const toggleHandler = () => {
      setToggleEducation(!toggleEducation)
    }

    return (
    <div>
      <button onClick={toggleHandler}>{name}</button>

      {!toggleEducation?<></>:(
        <>
      {education.length === 0 ? (
        <></>
      ) : (
        <div>
          {education.map((edu, index) => (
            <div key={index}>
              <button onClick={() => handleEducationClick(index)}>
                {edu[Object.keys(formfields)[0]] !== null && edu[Object.keys(formfields)[0]]  !== undefined ? edu[Object.keys(formfields)[0]]  : ''}
              </button>
              {editMode.index === index && (
                <div>
                    <DetailsForm education={editform} fieldDetail={fieldDetail} onChange={(e) => handleChange(index, e)} />
                    <button onClick={(e) => handleSave(index)}>Save</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {editMode.index === null && (<button onClick={onAddButton}>Add Education</button>)}
      {error.error? <p>{error.error}</p>: null}
      {editMode.index === education.length && (
          <div>
              <DetailsForm education={editform} fieldDetail={fieldDetail} onChange={(e) => handleChange(education.length, e)} />
              <button onClick={(e) => handleSave(education.length)}>Save</button>
          </div>
        )}
        </>
      )}
    </div>
  );
};

export default EducationForm;