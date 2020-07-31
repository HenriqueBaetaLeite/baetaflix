import React, { useState, useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField';
import Button from '../components/Button';

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

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';

    fetch(url).then(async (res) => {
      const resposta = await res.json();
      setCategorias([...resposta]);
    });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'meus Vídeos',
    //       descricao: 'Minha categoria',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'outra categoria',
    //       cor: '#e5e5e5',
    //     },
    //   ]);
    // }, 2 * 1000);
  }, []);

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
            label="Nome"
          />

          <FormField
            type="textarea"
            name="descricao"
            value={value.descricao}
            onChange={handleChange}
            label="Descrição"
          />

          <FormField
            type="color"
            name="cor"
            value={value.cor}
            onChange={handleChange}
            label="Cor"
          />
        </div>

        <Button disabled={value.nome ? false : true} type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && <h3>Loading...</h3>}

      <ul>
        {categorias.map((cat, index) => (
          <div style={{ border: `2px solid ${cat.cor}` }} key={`${cat}${index}`}>
            <li>{cat.nome}</li>
            {/* <p>{cat.descricao}</p>
            <p>{cat.cor}</p> */}
          </div>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
