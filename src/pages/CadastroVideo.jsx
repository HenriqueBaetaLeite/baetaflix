import React, { useState, useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../components/FormField';
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import videosRepository from '../repositories/videos';
import categoriasRepository from '../repositories/categorias';

const CadastroVideo = () => {
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map((cat) => cat.titulo);
  const history = useHistory();
  const { handleChange, value } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=OFHAIpw2oZI',
    categoria: 'Back End',
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((categ) => {
      setCategorias(categ);
    });
  }, []);
  console.log(
    'categorias: ',
    categorias.find((el) => el.titulo === 'Meus vídeos'),
  );

  const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === value.categoria);

  return (
    <PageDefault>
      <h2>Cadastro de Vídeo</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          console.log('categoria escolhida', categoriaEscolhida);
          videosRepository
            .createVideos({
              titulo: value.titulo,
              url: value.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log('Vídeo cadastrado com sucesso!');
              history.push('/');
            })
            .catch((e) => console.error(e));
        }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={value.titulo}
          onChange={handleChange}
        />
        <FormField label="URL do vídeo" name="url" value={value.url} onChange={handleChange} />
        <FormField
          label="Categoria"
          name="categoria"
          value={value.categoria}
          onChange={handleChange}
          suggestions={categoryTitle}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
