import React, { useState, useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { handleChange, value, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, value]);
    clearForm(valoresIniciais);
  };

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://baetaleiteflix.herokuapp.com/categorias';

    fetch(url).then(async (res) => {
      const resposta = await res.json();
      setCategorias([...resposta]);
    });

    // const getAPI = async () =>
    //   await fetch(url).then((res) =>
    //     res.json().then((data) => (res.ok ? Promise.resolve(data) : Promise.reject(data))),
    //   );

    // getAPI().then((data) => setCategorias(data));

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       titulo: 'meus Vídeos',
    //       descricao: 'Minha categoria',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       titulo: 'Back End',
    //       descricao: 'outra categoria',
    //       cor: '#e5e5e5',
    //     },
    //   ]);
    // }, 2 * 1000);
  }, []);

  return (
    <PageDefault>
      <h2>Cadastro de Categoria: {value.titulo}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            type="text"
            name="titulo"
            value={value.titulo}
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

        <Button disabled={value.titulo ? false : true} type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && <h3>Loading...</h3>}

      <ul>
        {categorias.map((cat, index) => (
          <div style={{ border: `2px solid ${cat.cor}` }} key={`${cat}${index}`}>
            <p>{cat.titulo}</p>
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
