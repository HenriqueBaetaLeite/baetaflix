import React, { useState } from 'react';
import PageDefault from '../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [value, setValue] = useState(valoresIniciais);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, value]);
    setValue(valoresIniciais);
  };

  const setValues = (key, values) => {
    setValue({ ...value, [key]: values });
  };

  const handleChange = (e) => {
    setValues(e.target.name, e.target.value);
  };

  return (
    <PageDefault>
      <h2>Cadastro de Categoria: {value.nome}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            type="text"
            name="nome"
            value={value.nome}
            onChange={handleChange}
            label="Nome: "
          />

          <FormField
            type="textarea"
            name="descricao"
            value={value.descricao}
            onChange={handleChange}
            label="Descrição: "
          />

          <FormField
            type="color"
            name="cor"
            value={value.cor}
            onChange={handleChange}
            label="Cor: "
          />
        </div>

        <button disabled={value.nome ? false : true} type="submit">
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((cat, index) => (
          <div style={{ border: `2px solid ${cat.cor}` }} key={`${cat}${index}`}>
            <p>{cat.nome}</p>
            <p>{cat.descricao}</p>
            <p>{cat.cor}</p>
          </div>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
