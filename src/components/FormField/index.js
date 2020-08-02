import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type='color'] {
    padding-left: 65px;
    width: 30%;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.4s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 58px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--blackLighter);
  }

  &:focus:not([type='color']) + span {
    transform: scale(0.5) translateY(-10px);
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      &:not([type='color']) + span {
        transform: scale(0.5) translateY(-10px);
      }
    `}
`;

const FormField = ({ type, name, value, onChange, label, suggestions }) => {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea' ? true : false;
  const tag = isTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value);

  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          hasValue={hasValue}
          id={fieldId}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option key={`index${suggestion}`} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );

  // fiz assim da primeira vez, mas fica bem extenso
  // if (type === 'textarea')
  //   return (
  //     <div>
  //       <label htmlFor={fieldId}>
  //         {label}
  //         <textarea
  //           id={fieldId}
  //           type={type}
  //           value={value}
  //           name={name}
  //           onChange={onChange}
  //           placeholder="...digite aqui"
  //         />
  //       </label>
  //     </div>
  //   );
  // return (
  //   <div>
  //     <label htmlFor={fieldId}>
  //       {label}
  //       <input
  //         id={fieldId}
  //         type={type}
  //         value={value}
  //         name={name}
  //         onChange={onChange}
  //         placeholder="...digite aqui"
  //       />
  //     </label>
  //   </div>
  // );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormField;
