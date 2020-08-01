import React, { useEffect, useState } from 'react';
import BannerMain from './components/BannerMain/';
import Carousel from './components/Carousel/';
import PageDefault from './components/PageDefault';
import categoriasRepository from './repositories/categorias';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository
      .getAllWithVideos()
      .then((categ) => {
        console.log(categ);
        setDadosIniciais(categ);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Meu FLix de diversas coisas"
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default App;
