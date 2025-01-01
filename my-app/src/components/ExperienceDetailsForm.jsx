import React from 'react';

const ExperienceDetailsForm = ({ experience, onChange }) => {
  return (
    <div>
      <p>Company</p>
      <input
        type="text"
        placeholder="Company Name"
        name="company"
        value={experience.company || ''}
        onChange={onChange}
        required
      />
      <p>Position Title</p>
      <input
        type="text"
        placeholder="Position Title"
        name="positionTitle"
        value={experience.positionTitle || ''}
        onChange={onChange}
        required
      />
      <p>Start Date</p>
      <input
        type="date"
        placeholder="Start Date"
        name="startDate"
        value={experience.startDate || ''}
        onChange={onChange}
        required
      />
      <p>End Date</p>
      <input
        type="date"
        placeholder="End Date"
        name="endDate"
        value={experience.endDate || ''}
        onChange={onChange}
      /> {/* End Date is not required */}
      <p>Location</p>
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={experience.location || ''}
        onChange={onChange}
      />
      <p>Description</p>
      <textarea
        placeholder="Job Description"
        name="description"
        value={experience.description || ''}
        onChange={onChange}
        rows={4} // Makes it a multi-line text area
      />
    </div>
  );
};

export default ExperienceDetailsForm;