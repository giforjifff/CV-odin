import React from 'react';

const DetailsForm = ({ education, onChange, fieldDetail }) => {
  console.log('education:', education);
  return (

    <div>

    {fieldDetail.map((field) => ( 
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label> {/* Use field.label */}
          {field.type === 'textarea' ? ( // Check field.type for textarea
            <textarea
              id={field.name}
              placeholder={field.placeholder} // Use field.placeholder
              name={field.name}
              value={education[field.name]} // Use item[field.name]
              onChange={onChange}
              rows={field.rows || 4} // Use field.rows or default to 4
              required={field.required} // Use field.required
            />
          ) : (
            <input
              id={field.name}
              type={field.type || 'text'} // Use field.type or default to text
              placeholder={field.placeholder} // Use field.placeholder
              name={field.name}
              value={education[field.name]} // Use item[field.name]
              onChange={onChange}
              required={field.required} // Use field.required
            />
          )}
        </div>
      ))}

    </div>
  );
}

export default DetailsForm