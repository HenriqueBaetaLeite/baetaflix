import React from 'react';

const FormField = ({ type, name, value, onChange, label }) => {
  if (type === 'textarea')
    return (
      <div>
        <label>
          {label}
          <textarea
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
      <label>
        {label}
        <input
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
