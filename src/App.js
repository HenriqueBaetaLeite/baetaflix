import React from 'react';
import Menu from './components/Menu/';
import BannerMain from './components/BannerMain/';
import Carousel from './components/Carousel/';
import dadosIniciais from './components/data/dados_iniciais.json';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Menu />
      {/* <BannerMain /> */}
      
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Footer />
    </div>
  );
}

export default App;
