import React, { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [value, setValue] = useState(valoresIniciais);
  const setValues = (key, values) => {
    setValue({ ...value, [key]: values });
  };
  const handleChange = (e) => {
    setValues(e.target.name, e.target.value);
  };

  const clearForm = () => {
    setValues(valoresIniciais);
  };

  return {
    handleChange,
    value,
    clearForm,
  };
};

export default useForm;
