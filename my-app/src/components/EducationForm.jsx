import React, { useState } from 'react';
import EducationDetailsForm from './EducationDetailsForm';

const EducationForm = ({ education, onAddEducation, formfields }) => {
    
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
      console.log(editform.degree);
      
      if(editform.degree ===''){
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
      console.log(education.length, editMode);
      setEditform(formfields)
      setEditMode({index: education.length})
    }
    const toggleHandler = () => {
      setToggleEducation(!toggleEducation)
    }

    return (
    <div>
      <button onClick={toggleHandler}>Education</button>

      {!toggleEducation?<></>:(
        <>
      {education.length === 0 ? (
        <></>
      ) : (
        <div>
          {education.map((edu, index) => (
            <div key={index}>
              <button onClick={() => handleEducationClick(index)}>
                {edu.degree !== null && edu.degree !== undefined ? edu.degree : ''}
              </button>
              {editMode.index === index && (
                <div>
                    <EducationDetailsForm education={editform} onChange={(e) => handleChange(index, e)} />
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
              <EducationDetailsForm education={editform} onChange={(e) => handleChange(education.length, e)} />
              <button onClick={(e) => handleSave(education.length)}>Save</button>
          </div>
        )}
        </>
      )}
    </div>
  );
};

export default EducationForm;