import React from 'react';
import PageDefault from '../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
  return (
    <PageDefault>
      <h2>Cadastro de Vídeo</h2>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
