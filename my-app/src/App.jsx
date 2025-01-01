import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form.jsx'

function App() {
  const [personal, setPersonal] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handlePersonalChange = (obj) => {
    setPersonal(obj)
  }

  const onAddEducation = (obj, index) => {
    console.log(education);
    const newEducation = [...education]
    newEducation[index] = obj
    setEducation(newEducation)
  }

  const onAddExperience = (obj, index) => {
    console.log(experience); // Log the current experience array
    const newExperience = [...experience]; // Create a shallow copy

    if (index >= experience.length) {
        // If the index is beyond the current length, it's a new entry
        newExperience.push(obj);
    } else {
        // Otherwise, it's an existing entry being updated
        newExperience[index] = obj;
    }

    setExperience(newExperience); // Update the state
};
  return (
    <div>
      <Form 
      personal={personal}
      handlePersonalChange={handlePersonalChange} // Passing the *reference*
      education={education}
      onAddEducation={onAddEducation} // Passing the *reference*
      experience={experience}
      onAddExperience={onAddExperience}
      />
    </div>
  );

}

export default App
