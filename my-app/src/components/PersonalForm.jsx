import React from 'react';

const PersonalComponent = ({ personal, handlePersonalChange }) => {
    console.log(personal);
    
  const handleChange = (e) => {
    // console.log('e', e.target.name);
    
    const newObj = {...personal, [e.target.name]: e.target.value}
    handlePersonalChange(newObj); // Call the function passed from the parent
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <label htmlFor="fullName">Full Name:</label><br/>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={personal.fullName || ''}
        onChange={handleChange}
        required
      /><br/><br/>

      <label htmlFor="email">Email:</label><br/>
      <input
        type="email"
        id="email"
        name="email"
        value={personal.email || ''}
        onChange={handleChange}
        required
      /><br/><br/>

      <label htmlFor="phone">Phone:</label><br/>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={personal.phone || ''}
        onChange={handleChange}
        required
      /><br/><br/>

        <label htmlFor="location">Location:</label><br/>
        <input
            type="text"
            id="location"
            name="location"
            value={personal.location || ''}
            onChange={handleChange}
            required
        /><br/><br/>
    </div>
  );
};

export default PersonalComponent;
