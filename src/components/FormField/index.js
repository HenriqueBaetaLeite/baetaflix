import React from 'react';

const FormField = ({ type, name, value, onChange, label }) => {
  const fieldId = `id_${name}`;

  if (type === 'textarea')
    return (
      <div>
        <label htmlFor={fieldId}>
          {label}
          <textarea
            id={fieldId}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder="...digite aqui"
          />
        </label>
      </div>
    );
  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        <input
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder="...digite aqui"
        />
      </label>
    </div>
  );
};

export default FormField;
