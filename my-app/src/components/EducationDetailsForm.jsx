import React from 'react';

const EducationDetailsForm = ({ education, onChange }) => {
  return (

    <div>
      <p>School</p>
      <input
        type="text"
        placeholder="School"
        name="school"
        value={education?.school || ''}
        onChange={onChange}
        required
      />
      <p>Degree</p>
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        value={education?.degree || ''}
        onChange={onChange}
        required
      />
      <p>Start Date</p>
      <input
        type="date"
        placeholder="Start Date"
        name="startDate"
        value={education?.startDate || ''}
        onChange={onChange}
        required
      />
      <p>End Date</p>
      <input
        type="date"
        placeholder="End Date"
        name="endDate"
        value={education?.endDate || ''}
        onChange={onChange}
        required
      />
      <p>Location</p>
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={education?.location || ''}
        onChange={onChange}
      />
      {/* Add other input fields as needed */}
    </div>
  );
}

export default EducationDetailsForm