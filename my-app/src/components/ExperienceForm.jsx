import React, { useState } from 'react';
import ExperienceDetailsForm from './ExperienceDetailsForm';

const ExperienceForm = ({ experience, onAddExperience }) => {
  const [editMode, setEditMode] = useState({ index: null }); // Single 'index' key
  const [editForm, setEditForm] = useState({
    company: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });
  const [error, setError] = useState({});
  const [toggleExperience, setToggleExperience] = useState(false);

  const handleExperienceClick = (index) => {
    setEditMode({ index: editMode.index === index ? null : index }); // Toggle
    setEditForm(experience[index]);
  };

  const handleChange = (index, e) => {
    const newExperience = { ...editForm, [e.target.name]: e.target.value };
    setEditForm(newExperience);
  };

  const handleSave = (ind) => {
    if (editForm.positionTitle === '') {
      setError({ error: 'Required Fields not filled' });
    } else {
      onAddExperience(editForm, ind);
      setError({});
      setEditMode({ index: null });
      setEditForm({
        company: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
      });
    }
  };

  const onAddButton = () => {
    setEditForm({
      company: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
    setEditMode({ index: experience.length });
  };

  const toggleHandler = () => {
    setToggleExperience(!toggleExperience);
  };

  return (
    <div>
      <button onClick={toggleHandler}>Experience</button>

      {!toggleExperience ? (
        <> </>
      ) : (
        <>
          {experience.length === 0 ? (
            <> </>
          ) : (
            <div>
              {experience.map((exp, index) => (
                <div key={index}>
                  <button onClick={() => handleExperienceClick(index)}>
                    {exp.positionTitle !== null && exp.positionTitle !== undefined
                      ? exp.positionTitle
                      : ''}
                  </button>
                  {editMode.index === index && (
                    <div>
                      <ExperienceDetailsForm
                        experience={editForm}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <button onClick={() => handleSave(index)}>Save</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {editMode.index === null && (
            <button onClick={onAddButton}>Add Experience</button>
          )}
          {error.error ? <p>{error.error}</p> : null}
          {editMode.index === experience.length && (
            <div>
              <ExperienceDetailsForm
                experience={editForm}
                onChange={(e) => handleChange(experience.length, e)}
              />
              <button onClick={() => handleSave(experience.length)}>
                Save
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExperienceForm;